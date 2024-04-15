using System.Security.Claims;

namespace GYM_Backend.Models
{
    public class ClassType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public ICollection<Classes> Classes { get; set; }
    }
}
