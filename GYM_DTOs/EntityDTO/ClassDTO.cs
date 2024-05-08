using System.ComponentModel.DataAnnotations;

namespace GYM_DTOs.EntityDTO
{
    public class ClassDTO
    {
        public int Id { get; set; }
        [Required(ErrorMessage ="El campo {0} es requerido")]
        public string Name { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public int DurationInMinutes { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public DateTime Schedule { get; set; }
        public ICollection<ReservationDTO>? Reservations { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public int ClassTypeId { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public int GymInstructorId { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public int Capacity { get; set; }

        public string? ClassTypeName { get; set; }
        public string? GymInstructorName { get; set; }

        public ClassTypeDTO? ClassType { get; set; }

        public GymInstructorDTO? GymInstructor { get; set; }
    }
}
