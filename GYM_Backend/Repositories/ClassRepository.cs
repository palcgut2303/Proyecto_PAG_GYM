using Azure;
using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Mappers;
using GYM_Backend.Models;
using GYM_DTOs;
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
            return _contextDb.Classes.Include(x => x.ClassType).Include(x => x.GymInstructor).Include(x => x.Reservations).Select(x => x.toClassesDTO()).ToList();
        }

        public ClassDTO GetById(int id)
        {
            var classes =  _contextDb.Classes.Include(x => x.ClassType).Include(x => x.GymInstructor).Include(x => x.Reservations).Where(x => x.Id == id).Select(x => x.toClassesDTO());

            return classes.FirstOrDefault();

        }

        public IEnumerable<ClassDTO> GetClassByGymInstructor(int idInstructor)
        {
            return _contextDb.Classes.Include(x => x.ClassType).Include(x => x.GymInstructor).Include(x => x.Reservations).Where(x => x.GymInstructorId == idInstructor).Select(x => x.toClassesDTO()).ToList();
        }

        public async Task<Classes> CreateClass(CreateClassRequestDTO model)
        {
            var idClassType = await ObtenerIdClassType(model.ClassTypeName);

            var idGymInstructor = await ObtenerIdGymInstructor(model.emailInstructor);

            var instructor = await _contextDb.GymInstructors.FirstOrDefaultAsync(x => x.emailUser == model.emailInstructor);
            var classType = await _contextDb.ClassType.FirstOrDefaultAsync(x => x.Name == model.ClassTypeName);

            if(idGymInstructor == 0)
            {
                return null;
            }

            var classes = new Classes()
            {
                ClassTypeId = idClassType,
                Schedule = model.Schedule,
                GymInstructorId = idGymInstructor,
                GymInstructor = instructor,
                ClassType = classType,
                Capacity = model.Capacity
            };

            _contextDb.Classes.Add(classes);
            await _contextDb.SaveChangesAsync();
            return classes;
        }

        public async Task<ResponseAPI<List<ClassDTO>>> UpdateClass(UpdateClassRequestDTO mode, int id)
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

            classes.ClassTypeId = classType.Id;
            classes.GymInstructorId = instructor.Id;
            classes.Schedule = mode.Schedule;
            classes.Capacity = mode.Capacity;

            await _contextDb.SaveChangesAsync();

            var classDTO =  _contextDb.Classes.Include(x => x.Reservations).Include(x => x.GymInstructor).Where(x => x.Id == id).Select(x => x.toClassesDTO());

            var classDTOList = classDTO.ToList();

            return new ResponseAPI<List<ClassDTO>> { Correct = true, Value = classDTOList };
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
            var clases =  await _contextDb.Classes.Include(x => x.ClassType).Include(x => x.GymInstructor).Include(x => x.Reservations).Select(x=> x.toClassesDTO()).ToListAsync();

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

        public async Task<int> ObtenerIdGymMember(string email)
        {
            var gymMembers = await _contextDb.GymMembers.FirstOrDefaultAsync(gi => gi.emailMember == email);
            if (gymMembers == null)
            {
                return 0;
            }
            return gymMembers.Id;
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

        public async Task<bool> ReservarClase(int idClase, int idUsuario)
        {
            var clase = await _contextDb.Classes.FirstOrDefaultAsync(x => x.Id == idClase);
            var usuario = await _contextDb.GymMembers.FirstOrDefaultAsync(x => x.Id == idUsuario);

            if (clase == null || usuario == null)
            {
                return false;
            }

            var reserva = new Reservation()
            {
                ClassesId = idClase,
                GymMemberId = idUsuario
            };

            _contextDb.Reservations.Add(reserva);
            await _contextDb.SaveChangesAsync();


            return true;
        }

        public async Task<IEnumerable<ClassDTO>> GetClassByType(string type)
        {
            type = type.ToUpper();

            return _contextDb.Classes.Include(x => x.ClassType).Include(x => x.GymInstructor).Include(x => x.Reservations).Where(x => x.ClassType.Name == type).Select(x => x.toClassesDTO()).ToList();
        }

    }
}
