﻿using GYM_Backend.Interfaces;
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
    public class ReservationController : ControllerBase
    {
        private readonly IReservationRepository _reservationRepository;

        public ReservationController(IReservationRepository reservationRepository)
        {
            this._reservationRepository = reservationRepository;
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
        public async Task<IActionResult> Post([FromBody] CreateReservationRequestDTO model)
        {
            Reservation reservation = await _reservationRepository.CreateReservation(model);

            return CreatedAtAction(nameof(findById), new { id = reservation.Id }, reservation.toReservationDTO());
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

    }
}
