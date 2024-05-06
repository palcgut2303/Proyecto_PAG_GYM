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

        public ClassDTO GetById(int id)
        {
            var classes =  _contextDb.Classes.Where(x => x.Id == id).Select(x => x.toClassesDTO());

            return classes.FirstOrDefault();

        }

        public async Task<Classes> CreateClass(CreateClassRequestDTO model)
        {
            var idClassType = await ObtenerIdClassType(model.ClassTypeName);

            var idGymInstructor = await ObtenerIdGymInstructor(model.emailInstructor);

            if(idGymInstructor == 0)
            {
                return null;
            }

            var classes = new Classes()
            {
                Name = model.Name,
                ClassTypeId = idClassType,
                DurationInMinutes = model.DurationInMinutes,
                Schedule = model.Schedule,
                GymInstructorId = idGymInstructor
            };

            _contextDb.Classes.Add(classes);
            await _contextDb.SaveChangesAsync();
            return classes;
        }

        public async Task<Classes> UpdateClass(UpdateClassRequestDTO mode, int id)
        {
            var instructor = await _contextDb.GymInstructors.FirstOrDefaultAsync(X => X.emailUser == mode.emailInstructor);

            if (instructor == null)
            {
                return null;
            }

            var classType = await _contextDb.ClassType.FirstOrDefaultAsync(x => x.Name == mode.ClassTypeName);

            if (classType == null)
            {
                return null;
            }

            var classes = await _contextDb.Classes.FirstOrDefaultAsync(x => x.Id == id);

            if (classes == null)
            {
                return null;
            }

            classes.Name = mode.Name;
            classes.DurationInMinutes = mode.DurationInMinutes;
            classes.ClassTypeId = classType.Id;
            classes.GymInstructorId = instructor.Id;
            classes.Schedule = mode.Schedule;


            _contextDb.SaveChanges();

            return classes;
        }

        public async Task<bool> BorradoClass(int id)
        {
            var classes = await _contextDb.Classes.FirstOrDefaultAsync(x => x.Id == id);    

            if (classes == null)
            {
                return false;
            }

             _contextDb.Classes.Remove(classes);

            await _contextDb.SaveChangesAsync();

            return true;
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

        public async Task<int> ObtenerIdGymInstructor(string email)
        {
            var gymInstructor = await _contextDb.GymInstructors.FirstOrDefaultAsync(gi => gi.emailUser == email);
            if(gymInstructor == null)
            {
                return 0;
            }
            return gymInstructor.Id;
        }

        public async Task<int> ObtenerIdClassType(string nombreClase)
        {
            var classType = await _contextDb.ClassType.FirstOrDefaultAsync(ct => ct.Name == nombreClase);
            if (classType == null)
            {
                return 0;
            }
            return classType.Id;
            
        }

    }
}
