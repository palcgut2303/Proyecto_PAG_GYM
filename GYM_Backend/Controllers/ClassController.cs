using GYM_Backend.Contexto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GYM_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassController : ControllerBase
    {
        private readonly ApplicationContextDb _contextDb;

        public ClassController(ApplicationContextDb contextDb)
        {
            this._contextDb = contextDb;
        }

        [HttpGet]
        public IActionResult GetAll() {

            var classes = _contextDb.Classes.ToList();

            return Ok(classes);
        }

        [HttpGet("{id}")]
        public IActionResult findById([FromRoute]int id)
        {
            var classes = _contextDb.Classes.Find(id);
            
            if(classes == null)
            {
                return NotFound();
            }

            return Ok(classes);
        }

    }
}
