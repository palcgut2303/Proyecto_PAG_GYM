using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs.EntityDTO
{
    public class GymInstructorDTO
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Specialty { get; set; }


        public ICollection<ClassDTO> Classes { get; set; }
    }
}
