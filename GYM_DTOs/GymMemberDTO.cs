using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs
{
    public class GymMemberDTO
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime JoinDate { get; set; }
        public DateTime? EndDate { get; set; }


        public int UserId { get; set; }
        public ICollection<ReservationDTO> Reservations { get; set; }
    }
}
