using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Mappers;
using GYM_Backend.Models;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
using GYM_DTOs.UpdateDTO;
using Microsoft.EntityFrameworkCore;
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
            return _contextDb.Reservations.Select(x => x.toReservationDTO()).ToList();
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

        public async Task<Reservation> UpdateReservation(UpdateReservationRequestDTO mode, int id)
        {
            var classes = await _contextDb.Classes.FirstOrDefaultAsync(x => x.Id == mode.ClassesId);

            if(classes == null)
            {
                return null;
            }

            var members = await _contextDb.GymMembers.FirstOrDefaultAsync(x => x.Id == mode.GymMemberId);
            
            if(members == null)
            {
                return null;
            }

            var reservartion = await _contextDb.Reservations.FirstOrDefaultAsync( x => x.Id == id);

            if(reservartion == null)
            {
                return null;
            }

            reservartion.GymMemberId = mode.GymMemberId;
            reservartion.ClassesId = mode.ClassesId;

            await _contextDb.SaveChangesAsync();

            return reservartion;
        
        }

        public async Task<string> DeleteReservation(int id)
        {
            var reservation = await _contextDb.Reservations.FirstOrDefaultAsync(x => x.Id == id);

            if (reservation == null)
            {
                return null;
            }

            _contextDb.Reservations.Remove(reservation);

            await _contextDb.SaveChangesAsync();

            return "Borrado Correctamente";
        }
    }
}
