namespace GYM_Backend.Models
{
    public class GymMember
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime JoinDate { get; set; }
        public DateTime? EndDate { get; set; }
        public User User { get; set; }
        public ICollection<Reservation>? Reservations { get; set; }
    }
}
