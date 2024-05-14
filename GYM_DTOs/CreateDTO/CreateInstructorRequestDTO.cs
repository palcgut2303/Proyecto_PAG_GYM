using GYM_DTOs.EntityDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs.CreateDTO
{
    public class CreateInstructorRequestDTO
    {
        public string FullName { get; set; }
        public ICollection<ClassDTO>? Classes { get; set; }

        public string emailUser { get; set; }
    }
}
