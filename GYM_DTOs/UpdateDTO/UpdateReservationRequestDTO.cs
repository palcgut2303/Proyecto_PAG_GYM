using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs.UpdateDTO
{
    public class UpdateReservationRequestDTO
    {
        public string GymMemberId { get; set; }

        public int ClassesId { get; set; }
    }
}
