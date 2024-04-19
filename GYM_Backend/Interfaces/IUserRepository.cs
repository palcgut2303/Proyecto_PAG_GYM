using GYM_Backend.Models;
using GYM_DTOs.AccountDTO;
using Microsoft.AspNetCore.Identity;

namespace GYM_Backend.Interfaces
{
    public interface IUserRepository
    {
        //Task<List<GymInstructor>> ListarProfesores();
        Task<IdentityResult> CrearProfesorAsync(string email, string nombre, string especialidad, string password);
    }
}
