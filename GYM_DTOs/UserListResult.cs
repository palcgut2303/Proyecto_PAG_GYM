using GYM_DTOs.AccountDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs
{
    public class UserListResult
    {
        public List<UserDTO> ListUser { get; set; }
        public bool Successful { get; set; }
        public string Error { get; set; }

    }
}
