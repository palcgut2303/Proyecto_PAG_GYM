using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Mappers;
using GYM_Backend.Models;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.UpdateDTO;
using Microsoft.EntityFrameworkCore;

namespace GYM_Backend.Repositories
{
    public class ClassTypeRepository : IClassTypeRepository
    {
        private readonly ApplicationContextDb _contextDb;

        public ClassTypeRepository(ApplicationContextDb contextDb)
        {
            _contextDb = contextDb;
        }

        public async Task<IEnumerable<ClassType>> GetAll()
        {
           return await _contextDb.ClassType.ToListAsync();
        }

        public async Task<ClassType> GetById(int id)
        {
            return await _contextDb.ClassType.FindAsync(id);
        }

        public async Task<ClassType> CreateClassType(CreatedClassTypeRequestDTO model)
        {
            var classType = model.toClassTypeFromDTO();

            _contextDb.ClassType.Add(classType);
            await _contextDb.SaveChangesAsync();
            return classType;
        }

        public async Task<ClassType> UpdateClassType(UpdateClassTypeRequestDTO mode, int id)
        {
            var classType = await _contextDb.ClassType.FirstOrDefaultAsync(x => x.Id == id);

            if(classType == null)
            {
                return null;
            }

            classType.Name = mode.Name;
            classType.Description = mode.Description;


            await _contextDb.SaveChangesAsync();

            return classType;
        }

        public async Task<string> DeleteClassType(int id)
        {
            var classType = await _contextDb.ClassType.FirstOrDefaultAsync(x => x.Id == id);

            if (classType == null)
            {
                return null;
            }

            _contextDb.ClassType.Remove(classType);

            await _contextDb.SaveChangesAsync();

            return classType.Name;
        }
    }
}
