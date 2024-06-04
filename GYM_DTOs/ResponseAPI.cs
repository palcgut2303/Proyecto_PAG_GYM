using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GYM_DTOs
{
    public class ResponseAPI<T>
    {
        public bool Correct { get; set; }
        public T? Value { get; set; }
        public string? Menssage { get; set; }
    }
}
