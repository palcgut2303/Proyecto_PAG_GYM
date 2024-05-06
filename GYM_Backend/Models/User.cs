using Microsoft.AspNetCore.Identity;

namespace GYM_Backend.Models
{
    public class User : IdentityUser
    {
        public string FullName { get; set; }

        public string Role { get; set; }
    }
}
