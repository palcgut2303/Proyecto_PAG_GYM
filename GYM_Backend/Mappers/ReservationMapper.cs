using GYM_Backend.Models;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
using System.Runtime.CompilerServices;

namespace GYM_Backend.Mappers
{
    public static class ReservationMapper
    {
        public static ReservationDTO toReservationDTO(this Reservation model)
        {
            return new ReservationDTO
            {
                ClassesId = model.ClassesId,
                GymMemberId = model.GymMemberId,
                Id = model.Id,
            };


        }

        public static Reservation toReservationFromDTO(this CreateReservationRequestDTO model)
        {

            return new Reservation
            {
                ClassesId = model.ClassesId,
                GymMemberId = model.GymMemberId
            };
        }
    }
}
