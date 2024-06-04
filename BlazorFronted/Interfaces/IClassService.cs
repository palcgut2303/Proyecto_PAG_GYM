using GYM_DTOs;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
using GYM_DTOs.UpdateDTO;

namespace BlazorFronted.Interfaces
{
    public interface IClassService
    {
        Task<ResponseAPI<ClassDTO>> UpdateClass(int id, UpdateClassRequestDTO classModel);
        Task<ClassListResult> ClassesList();
        Task<CreateClassResult> CreateClass(CreateClassRequestDTO classModel);
        Task<CreateClassRequestDTO> findByIdClass(int id);
        Task<Dictionary<DateTime, List<ClassDTO>>> GetClassesByDayOfTheWeek();
        Task<bool> DeleteClass(int id);
        Task<ResponseAPI<ClassDTO>> MakeReservation(int id, string email);
        Task<ResponseAPI<ClassDTO>> CancelReservation(int id, string email);
        Task<List<ClassDTO>> GetClassesByGymMember(string email);
        Task<List<GymMemberDTO>> GetGymMembersByClass(int id);
        Task<ResponseAPI<string>> CheckClassAvailability(CreateClassRequestDTO classModel);

        Task<List<ClassDTO>> ClassesListByGymInstructor(int idGymInstructor);
    }
}
