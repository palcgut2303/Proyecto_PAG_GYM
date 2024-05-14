using GYM_Backend.Models;
using GYM_DTOs;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
using GYM_DTOs.UpdateDTO;

namespace GYM_Backend.Interfaces
{
    public interface IReservationRepository
    {
        Task<Reservation> CreateReservation(CreateReservationRequestDTO model);
        Task<string> DeleteReservation(int id);
        IEnumerable<ReservationDTO> GetAll();
        Task<Reservation> GetById(int id);
        Task<List<ClassDTO>> GetClassesByGymMember(string email);
        Task<int> GetReservationId(int id, string email);
        Task<List<GymMemberDTO>> GetReservationsByClass(int id);
        Task<ResponseAPI<int>> GetReservationsByWeek(string email);
        Task<Reservation> UpdateReservation(UpdateReservationRequestDTO mode, int id);
    }
}
