using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Mappers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;


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
        public IActionResult GetAll() {

            var classes = _classRepository.GetAll();

            if(classes == null ||classes.Count() == 0)
            {
                return NotFound("No hay elementos en la lista");
            }

            return Ok(classes);
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



    }
}
