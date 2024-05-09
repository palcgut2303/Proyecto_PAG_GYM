using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs.EntityDTO
{
    public class GymMemberDTO
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public DateTime JoinDate { get; set; }
        public DateTime? EndDate { get; set; }
        public ICollection<ReservationDTO>? Reservations { get; set; }

        public string emailMember { get; set; }
    }
}
