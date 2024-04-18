using GYM_Backend.Models;
using GYM_DTOs;
using Microsoft.AspNetCore.Http.HttpResults;

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

        public static Classes toClassFromCreateDTO(this CreateClassRequestDTO requestDTO)
        {
            return new Classes
            {
                Name = requestDTO.Name,
                ClassTypeId = requestDTO.ClassTypeId,
                DurationInMinutes = requestDTO.DurationInMinutes,
                Schedule = requestDTO.Schedule,
                GymInstructorId = requestDTO.GymInstructorId
            };
        }
    }
}
