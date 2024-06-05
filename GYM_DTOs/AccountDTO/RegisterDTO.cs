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
        public string Username { get; set; }

        [Required(ErrorMessage = "Obligatorio")]
        public string FullName { get; set; }

        [Required(ErrorMessage = "Obligatorio")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public string? EmailCode { get; set; }
    }
}