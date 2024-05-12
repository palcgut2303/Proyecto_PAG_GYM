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
                ClassTypeId = model.ClassTypeId,
                ClassTypeName = model.ClassType.Name,
                Schedule = model.Schedule,
                GymInstructorName = model.GymInstructor.FullName,
                GymInstructorId = model.GymInstructorId,
                Capacity = model.Capacity,
                TotalReservations = model.Reservations.Where(x => x.ClassesId == model.Id).Count()
            };
        }

        public static ClassDTO toClassesTwoDTO(this Classes model)
        {
            return new ClassDTO
            {
                Id = model.Id,
                ClassTypeId = model.ClassTypeId,
                Schedule = model.Schedule,
                GymInstructorId = model.GymInstructorId,
                Capacity = model.Capacity
            };
        }

        public static Classes toClassFromCreateDTO(this CreateClassRequestDTO requestDTO)
        {
            
            return new Classes
            {
                //ClassTypeId = requestDTO.ClassTypeId,
                Schedule = requestDTO.Schedule,
                Capacity = requestDTO.Capacity
                //GymInstructorId = requestDTO.emailInstructor
            };
        }
    }
}
