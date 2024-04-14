using GYM_Backend.Models;
using GYM_DTOs;

namespace GYM_Backend.Interfaces
{
    public interface IClassRepository
    {
        IEnumerable<ClassDTO> GetAll();
        Task<Classes> GetById(int id);
    }
}
