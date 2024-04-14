using GYM_Backend.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace GYM_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TypeOfClassController : ControllerBase
    {
        private readonly ITypeOfClassRepository _typeofclassRepository;

        public TypeOfClassController(ITypeOfClassRepository typeofclassRepository)
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
    }
}
