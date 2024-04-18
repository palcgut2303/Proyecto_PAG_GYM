using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Mappers;
using GYM_Backend.Models;
using GYM_DTOs;
using System.Runtime.CompilerServices;

namespace GYM_Backend.Repositories
{
    public class ReservationRepository : IReservationRepository
    {
        private readonly ApplicationContextDb _contextDb;

        public ReservationRepository(ApplicationContextDb dbContext)
        {
            this._contextDb = dbContext;
        }


        public IEnumerable<ReservationDTO> GetAll()
        {
            return _contextDb.Reservations.Select(x=>x.toReservationDTO()).ToList();
        }

        public async Task<Reservation> GetById(int id)
        {
            return await _contextDb.Reservations.FindAsync(id);
        }

        public async Task<Reservation> CreateReservation(CreateReservationRequestDTO model)
        {
            var reservation = model.toReservationFromDTO();

            _contextDb.Reservations.Add(reservation);
            await _contextDb.SaveChangesAsync();
            return reservation;
        }

    }
}
