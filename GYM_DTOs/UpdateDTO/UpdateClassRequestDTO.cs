﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs.UpdateDTO
{
    public class UpdateClassRequestDTO
    {
        public string Name { get; set; }
        public int DurationInMinutes { get; set; }
        public DateTime Schedule { get; set; }
        public int ClassTypeId { get; set; }
        public int GymInstructorId { get; set; }
    }
}