using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Mappers;
using GYM_Backend.Models;
using GYM_DTOs;
using Microsoft.EntityFrameworkCore;

namespace GYM_Backend.Repositories
{
    public class ClassRepository : IClassRepository
    {

        private readonly ApplicationContextDb _contextDb;

        public ClassRepository( ApplicationContextDb contextDb)
        {
            _contextDb = contextDb;
        }

        public IEnumerable<ClassDTO> GetAll()
        {
            return _contextDb.Classes.Select(x => x.toClassesDTO()).ToList();
        }

        public async Task<Classes> GetById(int id)
        {
            return await _contextDb.Classes.FindAsync(id);
        }

        public async Task<Classes> CreateClass(CreateClassRequestDTO model)
        {
            var classes = model.toClassFromCreateDTO();

            _contextDb.Classes.Add(classes);
            await _contextDb.SaveChangesAsync();
            return classes;
        }

    }
}
