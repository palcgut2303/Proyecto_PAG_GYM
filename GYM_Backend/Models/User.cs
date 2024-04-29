using Microsoft.AspNetCore.Identity;

namespace GYM_Backend.Models
{
    public class User : IdentityUser
    {
        public string Role { get; set; }
    }
}
