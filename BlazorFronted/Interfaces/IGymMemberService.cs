using GYM_DTOs;

namespace BlazorFronted.Interfaces
{
    public interface IGymMemberService
    {
        Task<findGymPersonByIdResult> GymMemberByEmail(string email);
        Task<findGymPersonByIdResult> GymMemberById(int id);
    }
}
