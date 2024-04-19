namespace GYM_Backend.Models
{
    public class GymMember : User
    {
        public string FullName { get; set; }

        public DateTime JoinDate { get; set; }
        public DateTime? EndDate { get; set; }
        public ICollection<Reservation>? Reservations { get; set; }
    }
}
