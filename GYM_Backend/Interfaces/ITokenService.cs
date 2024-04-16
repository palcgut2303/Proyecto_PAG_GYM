using GYM_Backend.Models;

namespace GYM_Backend.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(User user);
    }
}
