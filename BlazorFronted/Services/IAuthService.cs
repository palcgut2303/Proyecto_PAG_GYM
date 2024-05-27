using GYM_DTOs;
using GYM_DTOs.AccountDTO;

namespace BlazorFronted.Services
{
    public interface IAuthService
    {
        Task<RegisterResult> Register(RegisterDTO registerModel);
        Task<LoginResult> Login(LoginDTO loginModel);
        Task Logout();
        Task<string> GetRole();
        Task<string> GetEmail();
        string RandomString();
        Task<ResponseAPI<SendEmailRequest>> SendEmail(SendEmailRequest model);
    }
}
