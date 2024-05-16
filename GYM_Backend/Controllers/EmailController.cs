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

        [HttpGet("{email}")]
        public IActionResult SendEmail([FromRoute] string email)
        {
            var cadenaEnviar = _message.RandomString();
           var result = _message.SendEmail("Código de verificación de GYM PAG", cadenaEnviar, email);

            if (!result.EsCorrecto)
            {
                return BadRequest(new ResponseAPI<string> { EsCorrecto = false, Mensaje = result.Mensaje });
            }

            return Ok(new ResponseAPI<string> { EsCorrecto = true, Mensaje = cadenaEnviar });
        }

        

    }
}
