using GYM_Backend.Models;
using GYM_DTOs;

namespace GYM_Backend.Interfaces
{
    public interface IReservationRepository
    {
        Task<Reservation> CreateReservation(CreateReservationRequestDTO model);
        IEnumerable<ReservationDTO> GetAll();
        Task<Reservation> GetById(int id);
    }
}
