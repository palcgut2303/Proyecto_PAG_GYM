using GYM_DTOs;

namespace BlazorFronted.Interfaces
{
    public interface IGymInstructorService
    {
        Task<findGymPersonByIdResult> GymInstructorByEmail(string email);
        Task<findGymPersonByIdResult> GymInstructorById(int id);
    }
}
