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
        
        [Required(ErrorMessage = "{0} is required")]
        public DateTime Schedule { get; set; }
        public int Capacity { get; set; }
        public string? ClassTypeName { get; set; }
        public string? emailInstructor { get; set; }
    }
}
