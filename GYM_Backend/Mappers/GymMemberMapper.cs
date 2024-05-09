using GYM_Backend.Models;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;

namespace GYM_Backend.Mappers
{
    public static class GymMemberMapper
    {
        public static GymMemberDTO toGymMemberDTO(this GymMember model)
        {

            return new GymMemberDTO
            {
                Id = model.Id,
                FullName = model.FullName,
                JoinDate = model.JoinDate,
                EndDate = model.EndDate,
                emailMember = model.emailMember

            };
        }

        public static GymMember toGymMemberFromCreateDTO(this GymMemberDTO requestDTO)
        {

            return new GymMember
            {
                FullName = requestDTO.FullName,
                JoinDate = requestDTO.JoinDate,
                EndDate = requestDTO.EndDate,
                emailMember = requestDTO.emailMember
            };
        }
    }
}
