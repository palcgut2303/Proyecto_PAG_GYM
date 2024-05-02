using GYM_Backend.Interfaces;
using GYM_DTOs;
using GYM_DTOs.EntityDTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace GYM_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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
        public IActionResult GetAll()
        {

            var listGymInstructor = _instructorRepository.GetAll();

            if (listGymInstructor == null || listGymInstructor.Count() == 0)
            {
                return Ok(new ResponseAPI<IEnumerable<GymInstructorDTO>> { EsCorrecto = false, Mensaje = "No hay clases disponibles" });
            }

            return Ok(new ResponseAPI<IEnumerable<GymInstructorDTO>> { EsCorrecto = true, Valor = listGymInstructor });
        }

        [HttpGet("{id}")]
        [SwaggerResponse(404, "No hay elementos en la lista")]
        public async Task<IActionResult> findById([FromRoute] int id)
        {
            var gymInstructor = _instructorRepository.GetById(id);

            if (gymInstructor == null)
            {
                return BadRequest(new findGymInstructorByIdResult { Successful = false, Error = "No se encontro el instructor" });
            }

            return Ok(new findGymInstructorByIdResult { Successful = true, GymInstructorDTO = gymInstructor});
        }
    }
}
