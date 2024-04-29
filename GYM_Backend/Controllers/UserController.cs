using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Models;
using GYM_Backend.Service;
using GYM_DTOs.AccountDTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

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

            var result = await _signInManager.CheckPasswordSignInAsync(user, login.Password, false);

            if (!result.Succeeded)
                return BadRequest(new LoginResult { Successful = false, Error = "Username and password are invalid." });
            
            
            
            return await TokenCrear(login);

        }

        private async Task<IActionResult> TokenCrear(LoginDTO login)
        {
            var username = await _context.Users.Where(u => u.Email == login.Email).Select(x => x.UserName).FirstOrDefaultAsync();



            var usuarioId = await _userRepository.GetUserIdByEmailAsync(login.Email);

            var rolJWT = await _userRepository.GetUserRolesAsync(usuarioId);


            var claims = new[]
            {
                new Claim("email",login.Email!),
                new Claim("username",username!),
                new Claim("rol",rolJWT.FirstOrDefault()!),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtSecurityKey"]!));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expiry = DateTime.Now.AddDays(Convert.ToInt32(_configuration["JwtExpiryInDays"]));

            var token = new JwtSecurityToken(
                _configuration["JwtIssuer"],
                _configuration["JwtAudience"],
                claims,
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
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var usuario = new User()
                {
                    UserName = model.Username,
                    Email = model.Email,
                    Role = rolDefault
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
        public async Task<ActionResult<IEnumerable<IdentityUser>>> ListarUsuariosAll()
        {
            var usuarios = await _userManager.Users.ToListAsync();
            return Ok(usuarios);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDTO>>> ListarUsuarios()
        {
            var usuarios = await _userManager.Users
                .Select(u => new UserDTO
                {
                    Id = u.Id,
                    Username = u.UserName,
                    Email = u.Email,
                    Rol = u.Role
                    // Agrega otros campos que desees devolver
                })
                .ToListAsync();

            return Ok(usuarios);
        }

        

    }
}
