using System.ComponentModel.DataAnnotations;

namespace GYM_Backend.Models
{
    public class Classes
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "{0} is required")]
        public string Name { get; set; }
        [Required(ErrorMessage = "{0} is required")]
        public int DurationInMinutes { get; set; }
        [Required(ErrorMessage = "{0} is required")]
        public DateTime Schedule { get; set; }

        public ICollection<Reservation>? Reservations { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        public int ClassTypeId { get; set; }
        public ClassType ClassType { get; set; }

        public int GymInstructorId { get; set; }
        public GymInstructor GymInstructor { get; set; }

    }
}
