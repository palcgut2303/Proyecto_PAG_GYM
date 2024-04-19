using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Models;
using GYM_DTOs.AccountDTO;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GYM_Backend.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationContextDb _contextDb;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public UserRepository(ApplicationContextDb dbContext, UserManager<User> userManager,RoleManager<IdentityRole> roleManager)
        {
            this._contextDb = dbContext;
            this._userManager = userManager;
            this._roleManager = roleManager;

           
        }

        public async Task<IdentityResult> CrearProfesorAsync(string email, string nombre, string especialidad, string password)
        {
            // Verifica si el rol "Profesor" existe, si no existe, créalo
            if (!await _roleManager.RoleExistsAsync("Instructor"))
            {
                await _roleManager.CreateAsync(new IdentityRole("Instructor"));
            }

            // Crea un nuevo usuario con el rol "Profesor"
            var usuario = new GymInstructor { UserName = email, Email = email, FullName = nombre, Speciality = especialidad};
            var resultadoUsuario = await _userManager.CreateAsync(usuario, password);

            if (resultadoUsuario.Succeeded)
            {
                // Asigna el rol de "Profesor" al nuevo usuario
                var resultadoRol = await _userManager.AddToRoleAsync(usuario, "Instructor");

                if (!resultadoRol.Succeeded)
                {
                    // Manejar el error al asignar el rol
                }
            }
            else
            {
                // Manejar el error al crear el usuario
            }

            return resultadoUsuario;
        }

    }
}
