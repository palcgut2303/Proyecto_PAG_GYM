using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Mappers;
using GYM_Backend.Models;
using GYM_DTOs;
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

        public async Task<int> GetReservationId(int id, string email)
        {
            var reservation = await _contextDb.Reservations.FirstOrDefaultAsync(x => x.ClassesId == id && x.GymMember.emailMember == email);

            if (reservation == null)
            {
                return 0;
            }

            return reservation.Id;
        }

        public async Task<List<GymMemberDTO>> GetReservationsByClass(int id)
        {
            var reservations = await _contextDb.Reservations.Where(x => x.ClassesId == id).ToListAsync();

            if (reservations == null)
            {
                return null;
            }

            List<GymMemberDTO> gymMembers = new List<GymMemberDTO>();

            foreach (var item in reservations)
            {
                var gymMember = await _contextDb.GymMembers.FirstOrDefaultAsync(x => x.Id == item.GymMemberId);

                var gymMemberDTO = gymMember.toGymMemberDTO();

                gymMembers.Add(gymMemberDTO);
            }

            return gymMembers;
        }

        public async Task<List<ClassDTO>> GetClassesByGymMember(string email)
        {
            if (email == null)
            {
                return null;
            }

            var user = await _contextDb.GymMembers.FirstOrDefaultAsync(x => x.emailMember == email);

            if (user == null)
            {
                return null;
            }

            var reservations = await _contextDb.Reservations.Where(x => x.GymMemberId == user.Id).ToListAsync();

            if (reservations == null)
            {
                return null;
            }

            List<ClassDTO> classes = new List<ClassDTO>();

            foreach (var item in reservations)
            {
                var classs = await _contextDb.Classes.FirstOrDefaultAsync(x => x.Id == item.ClassesId);

                var classDTO = classs.toClassesTwoDTO();

                classes.Add(classDTO);
            }

            return classes;
        }

        public async Task<ResponseAPI<int>> GetReservationsByWeek(string email)
        {
            var user = await _contextDb.GymMembers.FirstOrDefaultAsync(x => x.emailMember == email);

            if (user == null)
            {
                return new ResponseAPI<int> { EsCorrecto = false, Mensaje = "Usuario no encontrado" };
            }

            var reservations = await _contextDb.Reservations.Include(x => x.Classes).Where(x => x.GymMemberId == user.Id).ToListAsync();

            if (reservations == null)
            {
                return new ResponseAPI<int> { EsCorrecto = true, Mensaje = "Este usuario no tiene reservas" };
            }

            int count = 0;

            foreach (var item in reservations)
            {
                if (item.Classes.Schedule.Date >= DateTime.Now.AddDays(-7))
                {
                    count++;
                }
            }

            return new ResponseAPI<int> { EsCorrecto = true, Valor = count};
        }
        

    }
}
