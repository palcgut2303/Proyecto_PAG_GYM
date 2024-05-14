using GYM_DTOs.EntityDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs
{
    public class findGymPersonByIdResult
    {
        public bool Successful { get; set; }

        public string? Error { get; set; }

        public GymInstructorDTO? GymInstructorDTO{ get; set; }

        public GymMemberDTO? GymMemberDTO { get; set; }

    }
}
