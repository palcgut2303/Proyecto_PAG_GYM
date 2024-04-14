using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace GYM_Backend.Repositories
{
    public class TypeOfClassRepository : ITypeOfClassRepository
    {
        private readonly ApplicationContextDb _contextDb;

        public TypeOfClassRepository(ApplicationContextDb contextDb)
        {
            _contextDb = contextDb;
        }

        public async Task<IEnumerable<TypeOfClass>> GetAll()
        {
           return await _contextDb.TypesOfClasses.ToListAsync();
        }

        public async Task<TypeOfClass> GetById(int id)
        {
            return await _contextDb.TypesOfClasses.FindAsync(id);
        }
    }
}
