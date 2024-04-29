using GYM_Backend.Models;
using GYM_DTOs.AccountDTO;
using Microsoft.AspNetCore.Identity;

namespace GYM_Backend.Interfaces
{
    public interface IUserRepository
    {
        Task<string> GetUserIdByEmailAsync(string email);
        Task<List<string>> GetUserRolesAsync(string userId);
    }
}
