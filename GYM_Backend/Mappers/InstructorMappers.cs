using GYM_Backend.Models;
using GYM_DTOs.EntityDTO;

namespace GYM_Backend.Mappers
{
    public static class InstructorMappers
    {
        public static GymInstructorDTO toInstructorDTO(this GymInstructor model)
        {
            return new GymInstructorDTO
            {
                Id = model.Id,
                FullName = model.FullName,
                Speciality = model.Speciality,
                EmailUser = model.emailUser
            };
        }
    }
}
