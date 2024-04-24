using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Mappers;
using GYM_Backend.Models;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
using GYM_DTOs.UpdateDTO;
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

        public async Task<Classes> UpdateClass(UpdateClassRequestDTO mode, int id)
        {
            var instructor = await _contextDb.GymInstructors.FirstOrDefaultAsync(X=> X.Id == mode.GymInstructorId);

            if(instructor == null)
            {
                return null;
            }

            var classType = await _contextDb.ClassType.FirstOrDefaultAsync(x => x.Id == mode.ClassTypeId);

            if (classType == null)
            {
                return null;
            }

            var classes = await _contextDb.Classes.FirstOrDefaultAsync(x => x.Id == id);

            if(classes == null)
            {
                return null;
            }

            classes.Name = mode.Name;
            classes.DurationInMinutes = mode.DurationInMinutes;
            classes.ClassTypeId = mode.ClassTypeId;
            classes.GymInstructorId = mode.GymInstructorId;
            classes.Schedule = mode.Schedule;


             _contextDb.SaveChanges();

            return classes;
        }

        public async Task<string> BorradoClass(int id)
        {
            var classes = await _contextDb.Classes.FirstOrDefaultAsync(x => x.Id == id);    

            if (classes == null)
            {
                return null;
            }

             _contextDb.Classes.Remove(classes);

            await _contextDb.SaveChangesAsync();

            return classes.Name;
        }

        public async Task<Dictionary<DateTime, List<ClassDTO>>> ObtenerClasesPorDiaDeLaSemana()
        {
            // Consulta LINQ para obtener todas las clases
            var clases =  await _contextDb.Classes.Select(x=> x.toClassesDTO()).ToListAsync();

            // Agrupar las clases por día de la semana (solo utilizando la fecha sin la hora)
            var clasesPorDia = clases.GroupBy(clase => clase.Schedule.Date)
                                     .ToDictionary(group => group.Key, group => group.ToList());

            return clasesPorDia;
        }

    }
}
