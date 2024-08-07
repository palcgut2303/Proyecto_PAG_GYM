﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs.EntityDTO
{
    public class GymInstructorDTO
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Speciality { get; set; }
        public ICollection<ClassDTO>? Classes { get; set; }

        public string? EmailUser { get; set; }
    }
}
