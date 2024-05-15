using GYM_Backend.Models;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;

namespace GYM_Backend.Interfaces
{
    public interface IGymInstructorRepository
    {
        Task<GymInstructor> CreateGymInstrucor(CreateInstructorRequestDTO model);
        IEnumerable<GymInstructorDTO> GetAll();
        GymInstructorDTO GetByEmail(string email);
        GymInstructorDTO GetById(int id);
    }
}
