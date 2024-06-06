using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace GYM_DTOs.AccountDTO
{
    public class RegisterDTO
    {
        [Required(ErrorMessage = "Obligatorio")]
        [EmailAddress(ErrorMessage = "El formato del correo electrónico no es válido.")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Obligatorio")]
        [RegularExpression("^(?!\\d+$).*$", ErrorMessage = "El nombre de usuario no puede estar compuesto solo de números.")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Obligatorio")]
        [RegularExpression("^[^0-9]*$", ErrorMessage = "El nombre completo no puede contener números.")]
        public string FullName { get; set; }

        [Required(ErrorMessage = "Obligatorio")]
        [DataType(DataType.Password)]
        [MinLength(8, ErrorMessage = "La contraseña debe tener al menos 8 caracteres.")]
        public string Password { get; set; }

        public string? EmailCode { get; set; }
    }
}