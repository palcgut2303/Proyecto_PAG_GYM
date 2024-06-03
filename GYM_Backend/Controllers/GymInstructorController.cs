using GYM_Backend.Interfaces;
using GYM_DTOs;
using GYM_DTOs.EntityDTO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace GYM_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

    public class GymInstructorController : ControllerBase
    {
        private readonly IGymInstructorRepository _instructorRepository;

        public GymInstructorController(IGymInstructorRepository gymInstructorRepository)
        {

            this._instructorRepository = gymInstructorRepository;
        }

        [HttpGet]
        [SwaggerResponse(404, "No hay elementos en la lista")]
        //[Authorize(Roles = "Instructor")]
        [Authorize(Roles = "Instructor", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

        public IActionResult GetAll()
        {

            var listGymInstructor = _instructorRepository.GetAll();

            if (listGymInstructor == null || listGymInstructor.Count() == 0)
            {
                return Ok(new ResponseAPI<IEnumerable<GymInstructorDTO>> { EsCorrecto = false, Mensaje = "No hay instructores disponibles" });
            }

            return Ok(new ResponseAPI<IEnumerable<GymInstructorDTO>> { EsCorrecto = true, Valor = listGymInstructor });
        }

        [HttpGet("{id}")]
        [SwaggerResponse(404, "No hay elementos en la lista")]
        [Authorize(Roles = "Instructor", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

        public async Task<IActionResult> findById([FromRoute] int id)
        {
            var gymInstructor = _instructorRepository.GetById(id);

            if (gymInstructor == null)
            {
                return BadRequest(new findGymPersonByIdResult { Successful = false, Error = "No se encontro el instructor" });
            }

            return Ok(new findGymPersonByIdResult { Successful = true, GymInstructorDTO = gymInstructor});
        }

        [HttpGet("email/{email}")]
        [SwaggerResponse(404, "No hay elementos en la lista")]
        [Authorize(Roles = "Instructor", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

        public async Task<IActionResult> findByEmail([FromRoute] string email)
        {
            var gymInstructor = _instructorRepository.GetByEmail(email);

            if (gymInstructor == null)
            {
                return BadRequest(new findGymPersonByIdResult { Successful = false, Error = "No se encontro el instructor" });
            }

            return Ok(new findGymPersonByIdResult { Successful = true, GymInstructorDTO = gymInstructor });
        }
    }
}
