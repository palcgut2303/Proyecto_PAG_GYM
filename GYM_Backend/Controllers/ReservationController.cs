using GYM_Backend.Interfaces;
using GYM_Backend.Mappers;
using GYM_Backend.Models;
using GYM_Backend.Repositories;
using GYM_DTOs;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.UpdateDTO;
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

    public class ReservationController : ControllerBase
    {
        private readonly IReservationRepository _reservationRepository;

        private readonly IClassRepository _classRepository;
        public ReservationController(IReservationRepository reservationRepository, IClassRepository classRepository)
        {
            this._reservationRepository = reservationRepository;
            _classRepository = classRepository;
        }

        [HttpGet]
        [SwaggerResponse(404, "No hay elementos en la lista")]
        //[Authorize(Roles = "Instructor")]
        public IActionResult GetAll()
        {

            var reservation = _reservationRepository.GetAll();

            if (reservation == null || reservation.Count() == 0)
            {
                return NotFound("No hay elementos en la lista");
            }

            return Ok(reservation);
        }

        [HttpGet("{id}")]
        [SwaggerResponse(404, "No hay elementos en la lista")]
        public async Task<IActionResult> findById([FromRoute] int id)
        {
            var reservation = await _reservationRepository.GetById(id);

            if (reservation == null)
            {
                return NotFound("No se ha encontrado el objeto");
            }

            return Ok(reservation.toReservationDTO());
        }

        [HttpPost]
        public async Task<IActionResult> ReservarClase(CreateReservationRequest data)
        {

            var emailUser = data.email;
            var idClass = data.id;

            var idUsuario = await _classRepository.ObtenerIdGymMember(emailUser);

            var resultCheckReservationByMoth = await _reservationRepository.CheckReservationsByMonth(emailUser,idClass);

            if (!resultCheckReservationByMoth.Correct)
            {
                return BadRequest(new ResponseAPI<string> { Correct = false, Menssage = resultCheckReservationByMoth.Menssage });
            }

            var respuesta = await _classRepository.ReservarClase(idClass, idUsuario);

            if (!respuesta)
            {
                return NotFound(new ResponseAPI<string> { Correct = false, Menssage = "No se ha podido reservar esta clase" });
            }

            return Ok(new ResponseAPI<string> { Correct = true, Value = "Reserva Creada"});
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Put([FromRoute] int id, [FromBody] UpdateReservationRequestDTO requestDTO)
        {
            Reservation reservation = await _reservationRepository.UpdateReservation(requestDTO, id);

            if (reservation == null)
            {
                return NotFound("No se ha encontrado el objeto indicado");
            }

            return Ok(reservation.toReservationDTO());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var respuesta = await _reservationRepository.DeleteReservation(id);

            if (respuesta is null)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpGet]
        [Route("{id}/{email}")]
        public async Task<IActionResult> GetIdReservation([FromRoute] int id, [FromRoute] string email)
        {
            var idReservation = await _reservationRepository.GetReservationId(id, email);

            if (idReservation == 0)
            {
                return NotFound("No se ha encontrado el objeto indicado");
            }

            return Ok(idReservation);
        }

        [HttpGet]
        [Route("GetReservationsByClass/{id}")]
        public async Task<IActionResult> GetGymMembersReservationsByClass([FromRoute] int id)
        {
            var listGymMembers = await _reservationRepository.GetReservationsByClass(id);

            if (listGymMembers == null)
            {
                return NotFound(new GymMemberListResult { Error = "No se encuentra la clase", Successful = false });
            }

            return Ok(new GymMemberListResult { ListGymMembers = listGymMembers, Successful = true });
        }

        [HttpGet]
        [Route("GetClassesByGymMember/{email}")]
        public async Task<IActionResult> GetClassesByGymMember([FromRoute] string email)
        {
            var listClasses = await _reservationRepository.GetClassesByGymMember(email);

            if (listClasses == null)
            {
                return NotFound("No se ha encontrado el objeto indicado");
            }

            return Ok(listClasses);
        }


        [HttpGet]
        [Route("CheckReservationByUserCountWeek")]
        public async Task<IActionResult> CheckClassAvailability(string email)
        {
            var respuesta = await _reservationRepository.GetReservationsByWeek(email);

            if (respuesta.Correct)
            {
                return Ok(new ResponseAPI<int> { Correct = true, Value = respuesta.Value });
            }

            return NotFound(new ResponseAPI<int> { Correct = false, Value = respuesta.Value });
        }



    }
}
