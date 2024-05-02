﻿using GYM_DTOs;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
using GYM_DTOs.UpdateDTO;

namespace BlazorFronted.Services
{
    public interface IClassService
    {
        Task<ResponseAPI<ClassDTO>> ActualizarClass(int id, UpdateClassRequestDTO classModel);
        Task<ClassListResult> ClassesList();
        Task<CreateClassResult> CrearClass(CreateClassRequestDTO classModel);
        Task<CreateClassRequestDTO> findByIdClass(int id);
        Task<Dictionary<DateTime, List<ClassDTO>>> GetClassesByDayOfTheWeek();
    }
}
