using GYM_DTOs.AccountDTO;
using GYM_DTOs.EntityDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs
{
    public class GymMemberListResult
    {
        public List<GymMemberDTO> ListGymMembers { get; set; }
        public bool Successful { get; set; }
        public string Error { get; set; }
    }
}
