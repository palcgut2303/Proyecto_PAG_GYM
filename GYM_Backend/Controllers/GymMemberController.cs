using GYM_Backend.Interfaces;
using GYM_DTOs.EntityDTO;
using GYM_DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;

namespace GYM_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

    public class GymMemberController : ControllerBase
    {
        private readonly IGymMemberRepository _memberRepository;

        public GymMemberController(IGymMemberRepository gymMemberRepository)
        {

            this._memberRepository = gymMemberRepository;
        }

        [HttpGet]
        [SwaggerResponse(404, "No hay elementos en la lista")]
        public IActionResult GetAll()
        {

            var listGymInstructor = _memberRepository.GetAll();

            if (listGymInstructor == null || listGymInstructor.Count() == 0)
            {
                return Ok(new ResponseAPI<IEnumerable<GymMemberDTO>> { Correct = false, Menssage = "No hay miembros disponibles" });
            }

            return Ok(new ResponseAPI<IEnumerable<GymMemberDTO>> { Correct = true, Value = listGymInstructor });
        }

        [HttpGet("email/{email}")]
        [SwaggerResponse(404, "No hay elementos en la lista")]
        public async Task<IActionResult> findByEmail([FromRoute] string email)
        {
            var gymMember = _memberRepository.GetByEmail(email);

            if (gymMember == null)
            {
                return BadRequest(new findGymPersonByIdResult { Successful = false, Error = "No se encontro el instructor" });
            }

            return Ok(new findGymPersonByIdResult { Successful = true, GymMemberDTO = gymMember });
        }

        [HttpGet("{id}")]
        [SwaggerResponse(404, "No hay elementos en la lista")]
        public async Task<IActionResult> findById([FromRoute] int id)
        {
            var gymMember = _memberRepository.GetById(id);

            if (gymMember == null)
            {
                return BadRequest(new findGymPersonByIdResult { Successful = false, Error = "No se encontro el instructor" });
            }

            return Ok(new findGymPersonByIdResult { Successful = true, GymMemberDTO = gymMember });
        }
    }
}
