﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs.AccountDTO
{
    public class UserDTO
    {

        public string Id { get; set; }

        public bool isEnable { get; set; }
        public string Username { get; set; }

        public string FullName { get; set; }

        public string Email { get; set; }

        public string Rol { get; set; }

    }
}
