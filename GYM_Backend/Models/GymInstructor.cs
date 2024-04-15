namespace GYM_Backend.Models
{
    public class GymInstructor
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Specialty { get; set; }

        
        public User User { get; set; }
        public ICollection<Classes> Classes { get; set; }
    }
}
