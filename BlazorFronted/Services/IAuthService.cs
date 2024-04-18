using GYM_DTOs;

namespace BlazorFronted.Services
{
    public interface IAuthService
    {
        Task<RegisterResult> Register(RegisterDTO registerModel);
        Task<LoginResult> Login(LoginDTO loginModel);
        Task Logout();
    }
}
