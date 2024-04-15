using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs
{
    public class GymInstructorDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Specialty { get; set; }


        public int userId { get; set; }
        public ICollection<ClassDTO> Classes { get; set; }
    }
}
