﻿using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Models;
using GYM_Backend.Repositories;
using GYM_DTOs.AccountDTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.EntityFrameworkCore;

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

        public UserController(ApplicationContextDb applicationContextDb, UserManager<User> userManager, SignInManager<User> signInManager, ITokenService tokenService, IUserRepository userRepository, RoleManager<IdentityRole> roleManager)
        {
            this._context = applicationContextDb;
            this._userManager = userManager;
            this._signInManager = signInManager;
            _tokenService = tokenService;
            this._userRepository = userRepository;
            this._roleManager = roleManager;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDTO model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _userManager.Users.FirstOrDefaultAsync(u => u.Email == model.Email);

            if (user is null)
            {
                return Unauthorized("Invalid Username");
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, model.Password, false);

            if (!result.Succeeded)
            {
                return Unauthorized("Username not found and/or password incorrect");
            }

            return Ok(new NewUserDTO
            {
                Username = user.UserName,
                Email = user.Email,
                Token = _tokenService.CreateToken(user)
            });
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody] RegisterDTO model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var usuario = new User()
                {
                    UserName = model.Username,
                    Email = model.Email
                };

                var createdUser = await _userManager.CreateAsync(usuario, model.Password);

                if (createdUser.Succeeded)
                {
                    var roleResult = await _userManager.AddToRoleAsync(usuario, "User");

                    if (!roleResult.Succeeded)
                    {
                        return StatusCode(500, roleResult.Errors);
                    }
                    else
                    {
                        return Ok(new NewUserDTO
                        {
                            Username = usuario.UserName,
                            Email = usuario.Email,
                            Token = _tokenService.CreateToken(usuario)
                        });
                    }
                    //await _signInManager.SignInAsync(usuario, isPersistent: true); Para iniciar sesión directamente

                }
                else
                {
                    return StatusCode(500, createdUser.Errors);
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
                    Email = u.Email
                    // Agrega otros campos que desees devolver
                })
                .ToListAsync();

            return Ok(usuarios);
        }

        


    }
}
