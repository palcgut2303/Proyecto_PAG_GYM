using GYM_Backend.Models;
using GYM_DTOs.AccountDTO;
using Microsoft.AspNetCore.Identity;

namespace GYM_Backend.Interfaces
{
    public interface IUserRepository
    {
        Task<bool> DisableUser(string userId);
        Task<bool> EnableUser(string userId);
        Task<string> GetUserIdByEmailAsync(string email);
        Task<List<string>> GetUserRolesAsync(string userId);
    }
}
