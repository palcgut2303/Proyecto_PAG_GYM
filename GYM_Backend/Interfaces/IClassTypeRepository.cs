using GYM_Backend.Models;

namespace GYM_Backend.Interfaces
{
    public interface IClassTypeRepository
    {
        Task<IEnumerable<ClassType>> GetAll();
        Task<ClassType> GetById(int id);
    }
}
