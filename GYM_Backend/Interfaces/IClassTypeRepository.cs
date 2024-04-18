using GYM_Backend.Models;
using GYM_DTOs;

namespace GYM_Backend.Interfaces
{
    public interface IClassTypeRepository
    {
        Task<ClassType> CreateClassType(CreatedClassTypeRequestDTO model);
        Task<IEnumerable<ClassType>> GetAll();
        Task<ClassType> GetById(int id);
    }
}
