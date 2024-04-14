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
                Capacity = model.Capacity,
                Description = model.Description,
                Duration = model.Duration,
                Schedule = model.Schedule
            };
        }
    }
}
