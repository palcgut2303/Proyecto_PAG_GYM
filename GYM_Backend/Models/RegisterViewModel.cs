using System.ComponentModel.DataAnnotations;

namespace GYM_Backend.Models
{
    public class RegisterViewModel
    {
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [EmailAddress(ErrorMessage = "El campo {0} no es una dirección de correo válida")]
        public string Email { get; set; }

        public string? NormalizedEmail { get; set; }

        [Required(ErrorMessage = "El campo {0} es requerido")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
