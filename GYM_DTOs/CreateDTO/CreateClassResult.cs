﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs.CreateDTO
{
    public class CreateClassResult
    {
        public bool Successful { get; set; }

        public IEnumerable<string>? Errors { get; set; }
    }
}
