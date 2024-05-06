using GYM_DTOs;

namespace BlazorFronted.Services
{
    public interface IUserService
    {
        Task<UserListResult> UserList();
    }
}
