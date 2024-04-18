using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs
{
    public class CreateReservationRequestDTO
    {
        public int GymMemberId { get; set; }

        public int ClassesId { get; set; }
    }
}
