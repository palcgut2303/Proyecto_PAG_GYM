using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Mappers;
using GYM_Backend.Models;
using GYM_DTOs;
using GYM_DTOs.AccountDTO;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
using GYM_DTOs.UpdateDTO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
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
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
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

        [HttpGet("GetClassesByGymInstructor/{idGymInstructor}")]
        [SwaggerResponse(404, "No hay elementos en la lista")]
        public async Task<IActionResult> GetGymInstructor([FromRoute] int  idGymInstructor)
        {
            var classes = _classRepository.GetClassByGymInstructor(idGymInstructor);

            if (classes == null)
            {
                return Ok(new ClassListResult { Successful = false, Error = "No hay clases disponibles" });
            }

            return Ok(new ClassListResult { Successful = true, ListClass =  classes.ToList()  });
        }

        [HttpGet("porDia")]
        public async Task<IActionResult> FindClassesPerDay()
        {
            var classes = await _classRepository.GetClassesByDayOfTheWeek();


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
                return BadRequest(new CreateClassResult { Successful = false, Errors = new List<string> { "Error occured" }});
            }

            return Ok(new CreateClassResult { Successful = true});
        }

        //[HttpPut]
        //[Route("{id}")]
        //public async Task<IActionResult> Put([FromRoute] int id, [FromBody] UpdateClassRequestDTO requestDTO)
        //{
        //    var classes = await _classRepository.UpdateClass(requestDTO, id);

        //    if (classes == null)
        //    {
        //        return NotFound("No se ha encontrado el objeto indicado, ya sea Instructor, tipo de clase, o la clase para editar");
        //    }

        //    return Ok(classes);
        //}

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var respuesta = await _classRepository.DeletedClass(id);

            if(!respuesta)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpPost]
        [Route("reservar/{id}")]
        public async Task<IActionResult> ReservarClase([FromRoute] int id,string emailUser)
        {

            //Cojer el id del usuario a traves de su email
            var idUsuario = await _classRepository.GetIdGymMember(emailUser);

            var respuesta = await _classRepository.ReserveClass(id,idUsuario);

            if (!respuesta)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpGet("GetClassesByType/{typeClass}")]
        public async Task<IActionResult> encontrarClasesPorTipoClase([FromRoute] string typeClass)
        {
            var classes = await _classRepository.GetClassByType(typeClass);

            if (classes == null)
            {
                return NotFound(new ResponseAPI<List<ClassDTO>> { Correct = false, Menssage = "No se ha encontrado clases con este tipo" });
            }

            return Ok(new ResponseAPI<List<ClassDTO>> { Correct = true, Value = classes.ToList()});
        }
    }
}

