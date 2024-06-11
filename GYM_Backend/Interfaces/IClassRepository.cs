using GYM_Backend.Models;
using GYM_DTOs;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
using GYM_DTOs.UpdateDTO;

namespace GYM_Backend.Interfaces
{
    public interface IClassRepository
    {
        Task<bool> DeletedClass(int id);
        Task<Classes> CreateClass(CreateClassRequestDTO model);
        IEnumerable<ClassDTO> GetAll();
        ClassDTO GetById(int id);
        IEnumerable<ClassDTO> GetClassByGymInstructor(int idInstructor);
        Task<IEnumerable<ClassDTO>> GetClassByType(string type);
        Task<Dictionary<DateTime, List<ClassDTO>>> GetClassesByDayOfTheWeek();
        
        Task<int> GetIdGymInstructor(string email);
        Task<int> GetIdGymMember(string email);
        Task<bool> ReserveClass(int idClase, int idUsuario);
        //Task<ResponseAPI<List<ClassDTO>>> UpdateClass(UpdateClassRequestDTO mode, int id);
    }
}
