using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Mappers;
using GYM_Backend.Models;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
using GYM_DTOs.UpdateDTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System.IdentityModel.Tokens.Jwt;


namespace GYM_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassController : ControllerBase
    {
        private readonly IClassRepository _classRepository;

        public ClassController(IClassRepository classRepository)
        {
            
            this._classRepository = classRepository;
        }

        [HttpGet]
        [SwaggerResponse(404, "No hay elementos en la lista")]
        //[Authorize(Roles = "Instructor")]
        public IActionResult GetAll() {

            var classes = _classRepository.GetAll();

            if(classes == null ||classes.Count() == 0)
            {
                return BadRequest(new ClassListResult { Successful = false,Error = "No hay clases disponibles" });
            }

            return Ok(new ClassListResult { Successful = true, ListClass = classes });
        }

        [HttpGet("{id}")]
        [SwaggerResponse(404, "No hay elementos en la lista")]
        public async Task<IActionResult> findById([FromRoute]int id)
        {
            var classes = await _classRepository.GetById(id);
            
            if(classes == null)
            {
                return NotFound("No se ha encontrado el objeto");
            }

            return Ok(classes.toClassesDTO());
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateClassRequestDTO model)
        {
            Classes classesCreated = await _classRepository.CreateClass(model);

            return CreatedAtAction(nameof(findById), new { id = classesCreated.Id },classesCreated.toClassesDTO());
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Put([FromRoute] int id, [FromBody] UpdateClassRequestDTO requestDTO)
        {
            Classes classes = await _classRepository.UpdateClass(requestDTO, id);

            if (classes == null)
            {
                return NotFound("No se ha encontrado el objeto indicado, ya sea Instructor, tipo de clase, o la clase para editar");
            }

            return Ok(classes.toClassesDTO());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var respuesta = await _classRepository.BorradoClass(id);

            if(respuesta is null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
