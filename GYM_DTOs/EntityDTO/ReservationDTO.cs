using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs.EntityDTO
{
    public class ReservationDTO
    {
        public int Id { get; set; }

        public int GymMemberId { get; set; }

        public int ClassesId { get; set; }

        public List<GymMemberDTO>? Members { get; set; }
    }
}
