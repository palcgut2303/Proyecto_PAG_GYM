using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs.AccountDTO
{
    public class LoginDTO
    {

        [Required(ErrorMessage = "Obligatorio")]
        [EmailAddress(ErrorMessage = "El formato del correo electrónico no es válido.")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Obligatorio")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
