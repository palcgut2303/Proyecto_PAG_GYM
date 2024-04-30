using GYM_Backend.Interfaces;
using GYM_Backend.Mappers;
using GYM_Backend.Models;
using GYM_Backend.Repositories;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
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
        //[Authorize(Roles = "Instructor")]
        public IActionResult GetAll()
        {

            var typeOfClass = _typeofclassRepository.GetAll();

            if (typeOfClass == null || typeOfClass.Count() == 0)
            {
                return Ok(new ClassTypeListResult { Successful = false, Error = "No hay tipos de clases disponibles" });
            }

            return Ok(new ClassTypeListResult { Successful = true, ListClass = typeOfClass });
        }

        [HttpGet("{id}")]
        [SwaggerResponse(404, "No hay elementos en la lista")]
        public async Task<IActionResult> findById([FromRoute] int id)
        {
            var typeOfClass = await _typeofclassRepository.GetById(id);

            if (typeOfClass == null)
            {
                return NotFound("No se ha encontrado el objeto");
            }

            return Ok(typeOfClass);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreatedClassTypeRequestDTO model)
        {
            ClassType typeOfClassCreated = await _typeofclassRepository.CreateClassType(model);

            return CreatedAtAction(nameof(findById), new { id = typeOfClassCreated.Id }, typeOfClassCreated.toClassTypeDTO());
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
