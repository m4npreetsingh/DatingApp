using System.ComponentModel.DataAnnotations;

namespace DatingApp.Api.DTOs
{
    public class UserToRegisterDto
    {
        [Required]
        public string Password { get; set; }
        [Required]
        public string UserName { get; set; }
    }
}