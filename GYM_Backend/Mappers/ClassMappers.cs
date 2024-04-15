using GYM_Backend.Models;
using GYM_DTOs;

namespace GYM_Backend.Mappers
{
    public static class ClassMappers
    {
        public static ClassDTO toClassesDTO(this Classes model)
        {
            return new ClassDTO
            {
                Id = model.Id,
                Name = model.Name,
                ClassTypeId = model.ClassTypeId,
                DurationInMinutes = model.DurationInMinutes,
                Schedule = model.Schedule,
                GymInstructorId = model.GymInstructorId
            };
        }
    }
}
