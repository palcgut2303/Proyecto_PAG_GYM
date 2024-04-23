using System.Text.Json.Serialization;

namespace GYM_Backend.Models
{
    public class GymInstructor
    {

        public int Id {  get; set; }
        public string FullName { get; set; }
        public string Speciality { get; set; }
        public ICollection<Classes>? Classes { get; set; }

        public User User { get; set; }
    }
}
