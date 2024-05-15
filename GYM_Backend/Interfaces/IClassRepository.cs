using GYM_Backend.Models;
using GYM_DTOs;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
using GYM_DTOs.UpdateDTO;

namespace GYM_Backend.Interfaces
{
    public interface IClassRepository
    {
        Task<bool> BorradoClass(int id);
        Task<Classes> CreateClass(CreateClassRequestDTO model);
        IEnumerable<ClassDTO> GetAll();
        ClassDTO GetById(int id);
        IEnumerable<ClassDTO> GetClassByGymInstructor(int idInstructor);
        Task<Dictionary<DateTime, List<ClassDTO>>> ObtenerClasesPorDiaDeLaSemana();
        
        Task<int> ObtenerIdGymInstructor(string email);
        Task<int> ObtenerIdGymMember(string email);
        Task<bool> ReservarClase(int idClase, int idUsuario);
        Task<ResponseAPI<List<ClassDTO>>> UpdateClass(UpdateClassRequestDTO mode, int id);
    }
}
