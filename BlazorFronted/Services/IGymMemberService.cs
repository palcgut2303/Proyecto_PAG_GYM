using GYM_DTOs;

namespace BlazorFronted.Services
{
    public interface IGymMemberService
    {
        Task<findGymPersonByIdResult> GymMemberByEmail(string email);
        Task<findGymPersonByIdResult> GymMemberById(int id);
    }
}
