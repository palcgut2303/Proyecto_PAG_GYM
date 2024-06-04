using GYM_Backend.Service;
using GYM_DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GYM_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        private readonly IMessage _message;

        public EmailController(IMessage message)
        {
            _message = message;
        }

        [HttpPost]
        public IActionResult SendEmail([FromBody] SendEmailRequest model)
        {
            
           var result = _message.SendEmail(model);

            if (!result.Correct)
            {
                return BadRequest(new ResponseAPI<string> { Correct = false, Menssage = result.Menssage });
            }

            return Ok(new ResponseAPI<string> { Correct = true });
        }
    }
}
