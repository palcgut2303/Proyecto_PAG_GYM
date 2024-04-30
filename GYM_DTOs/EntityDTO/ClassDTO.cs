using System.ComponentModel.DataAnnotations;

namespace GYM_DTOs.EntityDTO
{
    public class ClassDTO
    {
        public int Id { get; set; }
        [Required(ErrorMessage ="El campo {0} es requerido")]
        public string Name { get; set; }
        public int DurationInMinutes { get; set; }
        public DateTime Schedule { get; set; }
        public ICollection<ReservationDTO>? Reservations { get; set; }
        public int ClassTypeId { get; set; }
        public int GymInstructorId { get; set; }
    }
}
