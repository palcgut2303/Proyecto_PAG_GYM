﻿using GYM_Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace GYM_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public UserController(UserManager<User> userManager,SignInManager<User> signInManager)
        {
            this._userManager = userManager;
            this._signInManager = signInManager;
        }

        [AllowAnonymous]
        public IActionResult Registro()
        {
            return Ok();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Registro(RegistroViewModel modelo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var usuario = new User()
            {
                Email = modelo.Email,
                UserName = modelo.Email
            };

            var resultado = await _userManager.CreateAsync(usuario, password: modelo.Password);
        
            if(resultado.Succeeded)
            {
                await _signInManager.SignInAsync(usuario, isPersistent: true);
                return Ok();
            }
            else
            {
                return BadRequest(resultado.Errors);
            }

        }
    }
}
