using GYM_Backend.Interfaces;
using GYM_Backend.Models;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
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
                ClassTypeName = model.ClassType.Name,
                DurationInMinutes = model.DurationInMinutes,
                Schedule = model.Schedule,
                GymInstructorName = model.GymInstructor.FullName,
                GymInstructorId = model.GymInstructorId,
                Capacity = model.Capacity
            };
        }

        public static Classes toClassFromCreateDTO(this CreateClassRequestDTO requestDTO)
        {
            
            return new Classes
            {
                Name = requestDTO.Name,
                //ClassTypeId = requestDTO.ClassTypeId,
                DurationInMinutes = requestDTO.DurationInMinutes,
                Schedule = requestDTO.Schedule,
                Capacity = requestDTO.Capacity
                //GymInstructorId = requestDTO.emailInstructor
            };
        }
    }
}
