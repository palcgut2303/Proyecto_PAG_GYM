using System.Text.Json.Serialization;

namespace GYM_Backend.Models
{
    public class GymInstructor : User
    {
        public string FullName { get; set; }

        public string Speciality { get; set; }

        public ICollection<Classes>? Classes { get; set; }
    }
}
