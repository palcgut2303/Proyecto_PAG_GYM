using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Mappers;
using GYM_Backend.Models;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
using GYM_DTOs.UpdateDTO;

namespace GYM_Backend.Repositories
{
    public class GymInstructorRepository : IGymInstructorRepository
    {
        private readonly ApplicationContextDb _contextDb;

        public GymInstructorRepository(ApplicationContextDb contextDb)
        {
            _contextDb = contextDb;
        }

        public IEnumerable<GymInstructorDTO> GetAll()
        {
            return _contextDb.GymInstructors.Select(x => x.toInstructorDTO()).ToList();
        }

        public GymInstructorDTO GetById(int id)
        {
            var classes = _contextDb.GymInstructors.Where(x => x.Id == id).Select(x => x.toInstructorDTO());

            return classes.FirstOrDefault();
        }

        public GymInstructorDTO GetByEmail(string email)
        {
            var gymMember = _contextDb.GymInstructors.Where(x => x.emailUser == email).Select(x => x.toInstructorDTO());

            return gymMember.FirstOrDefault();
        }

        public async Task<GymInstructor> CreateGymInstrucor(CreateInstructorRequestDTO model)
        {
            var emailUser = model.emailUser;

            var user = _contextDb.Users.Where(x => x.Email == emailUser).Where(x => x.Role == "Instructor");

            if(user == null)
            {
                return null;
            }

            var instructor = new GymInstructor
            {
                emailUser = model.emailUser,
                FullName = model.FullName,
            };

            _contextDb.GymInstructors.Add(instructor);
            await _contextDb.SaveChangesAsync();
            return instructor;

        }

        //public async Task<GymInstructor> UpadteInstructor(UpdateClassRequestDTO mode, int id)
        //{
           
        //}

        //public async Task<string> DeleteInstructor(int id)
        //{
           
        //}

    }
}
