using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs.CreateDTO
{
    public class CreateClassRequestDTO
    {

        [Required(ErrorMessage = "La fecha es requerido")]
        public DateTime Schedule { get; set; }

        [Required(ErrorMessage = "Capacidad es requerido")]
        [Range(1, 20, ErrorMessage = "La capacidad de la clase debe ser mayor de 0 y menor de 20")]
        public int Capacity { get; set; }
        public string? ClassTypeName { get; set; }
        public string? emailInstructor { get; set; }
    }
}
