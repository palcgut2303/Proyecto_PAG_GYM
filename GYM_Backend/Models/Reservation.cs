namespace GYM_Backend.Models
{
    public class Reservation
    {
        public int Id { get; set; }

        public int GymMemberId { get; set; }
        public GymMember GymMember { get; set; }

        public int ClassesId{ get; set; }
        public Classes Classes { get; set; }
    }
}
