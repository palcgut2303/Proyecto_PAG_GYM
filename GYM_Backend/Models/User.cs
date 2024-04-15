using Microsoft.AspNetCore.Identity;

namespace GYM_Backend.Models
{
    public class User : IdentityUser
    {
        
        public string Email { get; set; }
        public string NormalizedEmail { get; set; }
        public int Password { get; set; }


    }
}
