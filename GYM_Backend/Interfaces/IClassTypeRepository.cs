using GYM_Backend.Models;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
using GYM_DTOs.UpdateDTO;

namespace GYM_Backend.Interfaces
{
    public interface IClassTypeRepository
    {
        Task<string> DeleteClassType(int id);
        Task<ClassType> CreateClassType(CreatedClassTypeRequestDTO model);
        IEnumerable<ClassTypeDTO> GetAll();
        ClassTypeDTO GetById(int id);
        Task<ClassType> UpdateClassType(UpdateClassTypeRequestDTO mode, int id);
    }
}
