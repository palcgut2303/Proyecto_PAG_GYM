using GYM_DTOs.EntityDTO;

namespace BlazorFronted.Services
{
    public interface IClassService
    {
        Task<ClassListResult> ClassesList();
        Task<Dictionary<DateTime, List<ClassDTO>>> GetClassesByDayOfTheWeek();
    }
}
