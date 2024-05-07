using GYM_DTOs;
using GYM_DTOs.AccountDTO;

namespace BlazorFronted.Services
{
    public interface IUserService
    {
        Task<ResponseAPI<UserDTO>> EnableUser(string id);
        Task<ResponseAPI<UserDTO>> InactiveUser(string id);
        Task<ResponseAPI<UserDTO>> MakeAdmin(string id);
        Task<UserListResult> UserList();
    }
}
