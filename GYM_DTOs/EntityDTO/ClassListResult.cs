using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs.EntityDTO
{
    public class ClassListResult
    {
        public bool Successful { get; set; }
        public string? Error { get; set; }
        public IEnumerable<ClassDTO>? ListClass { get; set; }
    }
}
