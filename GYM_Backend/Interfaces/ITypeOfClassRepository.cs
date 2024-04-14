using GYM_Backend.Models;

namespace GYM_Backend.Interfaces
{
    public interface ITypeOfClassRepository
    {
        Task<IEnumerable<TypeOfClass>> GetAll();
        Task<TypeOfClass> GetById(int id);
    }
}
