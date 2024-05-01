using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Mappers;
using GYM_Backend.Models;
using GYM_DTOs.AccountDTO;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
using GYM_DTOs.UpdateDTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System.IdentityModel.Tokens.Jwt;
using static System.Runtime.InteropServices.JavaScript.JSType;


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
                return Ok(new ClassListResult { Successful = false,Error = "No hay clases disponibles" });
            }

            return Ok(new ClassListResult { Successful = true, ListClass = classes });
        }

        [HttpGet("{id}")]
        [SwaggerResponse(404, "No hay elementos en la lista")]
        public async Task<IActionResult> findById([FromRoute]int id)
        {
            var classes =  _classRepository.GetById(id);
            
            if(classes == null)
            {
                return Ok(new ClassListResult { Successful = false, Error = "No hay clases disponibles" });
            }

            return Ok(new ClassListResult { Successful = true, ListClass = new List<ClassDTO> { classes } });
        }

        //Recoger el nombre del instructor de la clase para poder realizar los campos del CreateClassRequestDTO
        [HttpGet("nameGymInstructor/{id}")]
        [SwaggerResponse(404, "No hay elementos en la lista")]
        public async Task<IActionResult> GetGymInstructor([FromRoute] int id)
        {
            var classes = _classRepository.GetById(id);

            if (classes == null)
            {
                return Ok(new ClassListResult { Successful = false, Error = "No hay clases disponibles" });
            }

            return Ok(new ClassListResult { Successful = true, ListClass = new List<ClassDTO> { classes } });
        }

        [HttpGet("porDia")]
        public async Task<IActionResult> encontrarClasesPorDia()
        {
            var classes = await _classRepository.ObtenerClasesPorDiaDeLaSemana();


            if (classes == null)
            {
                return NotFound("No se ha encontrado el objeto");
            }

            return Ok(classes);
        }


        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateClassRequestDTO model)
        {

            Classes classesCreated = await _classRepository.CreateClass(model);

            if(classesCreated == null)
            {
                return Ok(new CreateClassResult { Successful = false, Errors = new List<string> { "Error occured" }});
            }

            return Ok(new CreateClassResult { Successful = true});
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
