using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs.UpdateDTO
{
    public class UpdateClassRequestDTO
    {
        
        public DateTime Schedule { get; set; }
        public int Capacity { get; set; }
        public string? ClassTypeName { get; set; }
        public string? emailInstructor { get; set; }
    }
}
