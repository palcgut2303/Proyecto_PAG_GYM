using GYM_Backend.Models;
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
        Task<Reservation> UpdateReservation(UpdateReservationRequestDTO mode, int id);
    }
}
