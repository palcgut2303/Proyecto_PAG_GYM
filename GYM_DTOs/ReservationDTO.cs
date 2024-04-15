using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs
{
    public class ReservationDTO
    {
        public int Id { get; set; }

        public int GymMemberId { get; set; }

        public int ClassesId { get; set; }
    }
}
