using GYM_Backend.Models;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
using GYM_DTOs.UpdateDTO;

namespace GYM_Backend.Interfaces
{
    public interface IClassRepository
    {
        Task<string> BorradoClass(int id);
        Task<Classes> CreateClass(CreateClassRequestDTO model);
        IEnumerable<ClassDTO> GetAll();
        Task<Classes> GetById(int id);
        Task<Dictionary<DateTime, List<ClassDTO>>> ObtenerClasesPorDiaDeLaSemana();
        Task<Classes> UpdateClass(UpdateClassRequestDTO mode, int id);
    }
}
