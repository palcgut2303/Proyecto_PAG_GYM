using Microsoft.AspNetCore.Identity;

namespace GYM_Backend.Models
{
    public class User : IdentityUser
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDay { get; set; }
        public string Address { get; set; }

        //List<Classes>? Classes { get; set; }

    }
}
