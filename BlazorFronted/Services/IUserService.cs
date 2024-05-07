using GYM_DTOs;
using GYM_DTOs.AccountDTO;

namespace BlazorFronted.Services
{
    public interface IUserService
    {
        Task<ResponseAPI<UserDTO>> MakeAdmin(string id);
        Task<UserListResult> UserList();
    }
}
