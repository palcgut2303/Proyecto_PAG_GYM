using GYM_Backend.Interfaces;
using GYM_Backend.Mappers;
using GYM_Backend.Models;
using GYM_Backend.Repositories;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.UpdateDTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace GYM_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassTypeController : ControllerBase
    {
        private readonly IClassTypeRepository _typeofclassRepository;

        public ClassTypeController(IClassTypeRepository typeofclassRepository)
        {

            this._typeofclassRepository = typeofclassRepository;
        }

        [HttpGet]
        [SwaggerResponse(404, "No hay elementos en la lista")]
        public async Task<IActionResult> GetAll()
        {

            var classes = await _typeofclassRepository.GetAll();

            if (classes == null || classes.Count() == 0)
            {
                return NotFound("No hay elementos en la lista");
            }

            return Ok(classes);
        }

        [HttpGet("{id}")]
        [SwaggerResponse(404, "No hay elementos en la lista")]
        public async Task<IActionResult> findById([FromRoute] int id)
        {
            var classes = await _typeofclassRepository.GetById(id);

            if (classes == null)
            {
                return NotFound("No se ha encontrado el objeto");
            }

            return Ok(classes);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreatedClassTypeRequestDTO model)
        {
            ClassType classesCreated = await _typeofclassRepository.CreateClassType(model);

            return CreatedAtAction(nameof(findById), new { id = classesCreated.Id }, classesCreated.toClassTypeDTO());
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Put([FromRoute] int id, [FromBody] UpdateClassTypeRequestDTO requestDTO)
        {
            ClassType classType = await _typeofclassRepository.UpdateClassType(requestDTO, id);

            if(classType == null)
            {
                return NotFound();
            }

            return Ok(classType.toClassTypeDTO());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var respuesta = await _typeofclassRepository.DeleteClassType(id);

            if (respuesta is null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
