using GYM_DTOs;

namespace BlazorFronted.Services
{
    public interface IGymInstructorService
    {
        Task<findGymPersonByIdResult> GymInstructorByEmail(string email);
        Task<findGymPersonByIdResult> GymInstructorById(int id);
    }
}
