using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace GYM_Backend.Models
{
    public class User : IdentityUser
    {
        public string FullName { get; set; }
        public bool IsEnabled { get; set; }
        public string Role { get; set; }

        [Required]
        public string EmailCode { get; set; }
    }
}
