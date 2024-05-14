using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Mappers;
using GYM_Backend.Models;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;

namespace GYM_Backend.Repositories
{
    public class GymMemberRepository : IGymMemberRepository
    {
        private readonly ApplicationContextDb _contextDb;

        public GymMemberRepository(ApplicationContextDb contextDb)
        {
            _contextDb = contextDb;
        }

        public IEnumerable<GymMemberDTO> GetAll()
        {
            return _contextDb.GymMembers.Select(x => x.toGymMemberDTO()).ToList();
        }

        public GymMemberDTO GetByEmail(string email)
        {
            var gymMember = _contextDb.GymMembers.Where(x => x.emailMember == email).Select(x => x.toGymMemberDTO());

            return gymMember.FirstOrDefault();
        }

        public GymMemberDTO GetById(int id)
        {
            var gymMember = _contextDb.GymMembers.Where(x => x.Id == id).Select(x => x.toGymMemberDTO());

            return gymMember.FirstOrDefault();
        }

        public async Task<GymMember> CreateGymMember(CreateInstructorRequestDTO model)
        {
            var emailUser = model.emailUser;

            var user = _contextDb.Users.Where(x => x.Email == emailUser).Where(x => x.Role == "User");

            if (user == null)
            {
                return null;
            }

            var member = new GymMember
            {
                emailMember = model.emailUser,
                FullName = model.FullName,
                JoinDate = DateTime.Now,

            };

            _contextDb.GymMembers.Add(member);
            await _contextDb.SaveChangesAsync();
            return member;

        }

    }
}
