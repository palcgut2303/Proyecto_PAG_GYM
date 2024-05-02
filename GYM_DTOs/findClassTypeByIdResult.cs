using GYM_DTOs.EntityDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs
{
    public class findClassTypeByIdResult
    {
        public bool Successful { get; set; }
        public string? Error { get; set; }
        public ClassTypeDTO? ClassTypeDTO{ get; set; }
    }
}
