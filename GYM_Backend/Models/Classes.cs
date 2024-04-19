namespace GYM_Backend.Models
{
    public class Classes
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int DurationInMinutes { get; set; }
        public DateTime Schedule { get; set; }

        public ICollection<Reservation>? Reservations { get; set; }

        public int ClassTypeId { get; set; }
        public ClassType ClassType { get; set; }

        public string GymInstructorId { get; set; }
        public GymInstructor GymInstructor { get; set; }

    }
}
