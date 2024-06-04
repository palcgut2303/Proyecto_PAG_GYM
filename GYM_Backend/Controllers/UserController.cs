using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Models;
using GYM_Backend.Repositories;
using GYM_Backend.Service;
using GYM_DTOs;
using GYM_DTOs.AccountDTO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace GYM_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationContextDb _context;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly IUserRepository _userRepository;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;

        public UserController(IConfiguration configuration, ApplicationContextDb applicationContextDb, UserManager<User> userManager, SignInManager<User> signInManager, ITokenService tokenService, IUserRepository userRepository, RoleManager<IdentityRole> roleManager)
        {
            this._context = applicationContextDb;
            this._userManager = userManager;
            this._signInManager = signInManager;
            _tokenService = tokenService;
            this._userRepository = userRepository;
            this._roleManager = roleManager;
            _configuration = configuration;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDTO login)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _userManager.Users.FirstOrDefaultAsync(u => u.Email == login.Email);


            if (user is null)
            {
                return BadRequest(new LoginResult { Successful = false, Error = "Username and password are invalid." });
            }


            if (!user.IsEnabled)
            {
                return BadRequest(new LoginResult { Successful = false, Error = "Cuenta Deshabilitada, hable con el administrador del sistema." });

            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, login.Password, false);

            if (!result.Succeeded)
                return BadRequest(new LoginResult { Successful = false, Error = "Username and password are invalid." });
            
            
            
            return await TokenCrear(login);

        }

        private async Task<IActionResult> TokenCrear(LoginDTO login)
        {
            var username = await _context.Users.Where(u => u.Email == login.Email).Select(x => x.UserName).FirstOrDefaultAsync();
            var usuarioId = await _userRepository.GetUserIdByEmailAsync(login.Email);



            var user = await _userManager.FindByEmailAsync(login.Email);
            var roles = await _userManager.GetRolesAsync(user);
            var rolJWT = await _userRepository.GetUserRolesAsync(usuarioId);

            var userClaims = new[]
            {
                new Claim(ClaimTypes.Name,login.Email!),
                new Claim("username",username!),
                new Claim(ClaimTypes.Role, rolJWT.FirstOrDefault()!)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtSecurityKey"]!));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);
            var expiry = DateTime.Now.AddDays(Convert.ToInt32(_configuration["JwtExpiryInDays"]));

            var token = new JwtSecurityToken(
                claims: userClaims,
                expires: expiry,
                signingCredentials: creds
            );

            return Ok(new LoginResult { Successful = true, Token = new JwtSecurityTokenHandler().WriteToken(token) });
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody] RegisterDTO model)
        {
            string rolDefault = "User";

            try
            {

                var listUser = await _userManager.Users.ToListAsync();

                foreach (var user in listUser)
                {
                    if (user.Email == model.Email || user.UserName == model.Username)
                    {
                        return BadRequest(new RegisterResult { Successful = false, Errors = new List<string> { "Email o Username ya existente" } });
                    }
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var usuario = new User()
                {
                    UserName = model.Username,
                    Email = model.Email,
                    Role = rolDefault,
                    FullName = model.FullName,
                    IsEnabled = true,
                    EmailCode = model.EmailCode!
                    
                };

                var createdUser = await _userManager.CreateAsync(usuario, model.Password);

                if (createdUser.Succeeded)
                {
                    var roleResult = await _userManager.AddToRoleAsync(usuario, rolDefault);

                    if (!roleResult.Succeeded)
                    {
                        return StatusCode(500, roleResult.Errors);
                    }
                    else
                    {
                        var nuevoMiembro = new GymMember
                        {
                            FullName = usuario.FullName,
                            emailMember = usuario.Email,
                            JoinDate = DateTime.Now

                        };

                        _context.GymMembers.Add(nuevoMiembro);
                        await _context.SaveChangesAsync();

                        return Ok(new RegisterResult { Successful = true });
                    }
                    //await _signInManager.SignInAsync(usuario, isPersistent: true); Para iniciar sesión directamente

                }
                else
                {
                    var errors = createdUser.Errors.Select(x => x.Description);

                    return Ok(new RegisterResult { Successful = false, Errors = errors });
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }


        }

        [HttpGet("AllFields")]
        [Authorize(Roles = "Instructor", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult<IEnumerable<IdentityUser>>> ListarUsuariosAll()
        {
            var usuarios = await _userManager.Users.ToListAsync();
            return Ok(usuarios);
        }

        [HttpGet]
        public async Task<ActionResult<UserListResult>> ListarUsuarios()
        {
            var usuarios = await _userManager.Users
                .Select(u => new UserDTO
                {
                    Id = u.Id,
                    Username = u.UserName,
                    Email = u.Email,
                    Rol = u.Role,
                    FullName = u.FullName,
                    isEnable = u.IsEnabled
                })
                .ToListAsync();

            if(usuarios.Count == 0)
            {
                return Ok(new UserListResult { Successful = false, Error = "No hay usuarios" });
            }else if(usuarios is null)
            {
                return Ok(new UserListResult { Successful = false, Error = "No hay usuarios" });
            }

            return Ok(new UserListResult { Successful = true, ListUser = usuarios});
        }

        [HttpGet("CambiarRolAInstructor/{userId}")]
        public async Task<IActionResult> CambiarRolUsuario([FromRoute] string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                return NotFound(new ResponseAPI<UserDTO> { Correct = false, Menssage = "Usuario no encontrado" });
            }

            

            var removeUserFromRoleResult = await _userManager.RemoveFromRoleAsync(user, "User");
            if (!removeUserFromRoleResult.Succeeded)
            {
                return BadRequest(new ResponseAPI<UserDTO> { Correct = false, Menssage = "Error al quitar el rol de USER"});
            }

            user.Role = "Instructor";

            var addAdminRoleResult = await _userManager.AddToRoleAsync(user, "Instructor");
            if (!addAdminRoleResult.Succeeded)
            {
                return BadRequest(new ResponseAPI<UserDTO> { Correct = false, Menssage = "Rol no cambiado a ADMIN" });
            }

            var listaMiembros = await _context.GymMembers.ToListAsync();
            foreach (var miembro in listaMiembros)
            {
                if (miembro.emailMember == user.Email)
                {
                    var reservas = await _context.Reservations.Where(x => x.GymMemberId == miembro.Id).ToListAsync();
                    foreach (var reserva in reservas)
                    {
                        _context.Reservations.Remove(reserva);
                        await _context.SaveChangesAsync();
                    }

                    _context.GymMembers.Remove(miembro);
                    await _context.SaveChangesAsync();
                }
            }


            var nuevoInstructor = new GymInstructor
            {
                FullName = user.FullName,
                emailUser = user.Email
            };

            _context.GymInstructors.Add(nuevoInstructor);
            await _context.SaveChangesAsync();

            return Ok(new ResponseAPI<UserDTO> {Correct = true, Menssage = "Rol cambiado exitosamente a ADMIN" });
        }


        [HttpGet("disableUser/{userId}")]
        [Authorize(Roles = "Instructor", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> DesactivarUsuario([FromRoute]string userId)
        {
            var success = await _userRepository.DisableUser(userId);
            if (!success)
            {
                return Ok(new ResponseAPI<UserDTO> { Correct = false, Menssage = "No se puede desactivar esta cuenta" });
            }

            return Ok(new ResponseAPI<UserDTO> { Correct = true, Menssage = "Cuenta Deshabilitada" });
        }

        [HttpGet("enableUser/{userId}")]
        [Authorize(Roles = "Instructor", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> ActivarUsuario([FromRoute]string userId)
        {
            var success = await _userRepository.EnableUser(userId);
            if (!success)
            {
                return Ok(new ResponseAPI<UserDTO> { Correct = false, Menssage = "Error, no se puede habilitar" });
            }

            return Ok(new ResponseAPI<UserDTO> { Correct = true, Menssage = "Cuenta Habilitada" });
        }

    }


    
}
