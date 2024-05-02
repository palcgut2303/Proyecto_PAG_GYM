using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;

namespace BlazorFronted.Services
{
    public interface IClassService
    {
        Task<ClassListResult> ClassesList();
        Task<CreateClassResult> CrearClass(CreateClassRequestDTO classModel);
        Task<CreateClassRequestDTO> findByIdClass(int id);
        Task<Dictionary<DateTime, List<ClassDTO>>> GetClassesByDayOfTheWeek();
    }
}
