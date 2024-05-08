using GYM_DTOs;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
using GYM_DTOs.UpdateDTO;

namespace BlazorFronted.Services
{
    public interface IClassService
    {
        Task<ResponseAPI<ClassDTO>> UpdateClass(int id, UpdateClassRequestDTO classModel);
        Task<ClassListResult> ClassesList();
        Task<CreateClassResult> CrearClass(CreateClassRequestDTO classModel);
        Task<CreateClassRequestDTO> findByIdClass(int id);
        Task<Dictionary<DateTime, List<ClassDTO>>> GetClassesByDayOfTheWeek();
        Task<bool> DeleteClass(int id);
        Task<ResponseAPI<ClassDTO>> ReserveClass(int id, string email);
    }
}
