using GYM_DTOs.EntityDTO;

namespace GYM_Backend.Interfaces
{
    public interface IGymMemberRepository
    {
        IEnumerable<GymMemberDTO> GetAll();
        GymMemberDTO GetByEmail(string email);
        GymMemberDTO GetById(int id);
    }
}
