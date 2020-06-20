using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using DatingApp.Api.Data;
using DatingApp.Api.DTOs;
using DatingApp.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;

namespace DatingApp.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        public IConfiguration _config { get; }
        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            _config = config;
            _repo = repo;

        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(UserToRegisterDto userToRegisterDto)
        {

            userToRegisterDto.UserName = userToRegisterDto.UserName.ToLower();
            if (await _repo.UserExists(userToRegisterDto.UserName))
            {
                return BadRequest("User already exists");
            }
            var userToCreate = new User()
            {
                UserName = userToRegisterDto.UserName
            };
            var user = await _repo.Register(userToCreate, userToRegisterDto.Password);
            return Ok();

        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserToLoginDTO userToLoginDto)
        {

            var user = await _repo.Login(userToLoginDto.UserName.ToLower(), userToLoginDto.Password);
            if (null == user)
            {
                return Unauthorized("abbe");
            }
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier,user.Id.ToString()),
                new Claim(ClaimTypes.Name,user.UserName.ToString()),


            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
            var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha512Signature);
           
            var tokenDescriptor = new SecurityTokenDescriptor(){
                Subject = new ClaimsIdentity(claims),
                Expires = System.DateTime.UtcNow.AddDays(7),
                SigningCredentials  = creds
            };

             var tokenHandler = new JwtSecurityTokenHandler();
             var token =tokenHandler.CreateToken(tokenDescriptor);
            return Ok(new{token =tokenHandler.WriteToken(token)});

        }

    }
}