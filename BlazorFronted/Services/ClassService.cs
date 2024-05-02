using GYM_DTOs.AccountDTO;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
using System.Net.Http;
using System.Net.Http.Json;

namespace BlazorFronted.Services
{
    public class ClassService : IClassService
    {
        private readonly HttpClient _http;

        public ClassService(HttpClient http)
        {
            _http = http;
        }


        public async Task<ClassListResult> ClassesList()
        {
            var result = await _http.GetFromJsonAsync<ClassListResult>("api/Class");

            return result;

        }

        public async Task<CreateClassRequestDTO> findByIdClass(int id)
        {
            var result = await _http.GetFromJsonAsync<ClassListResult>("api/Class/{id}");

            var classDTO = result.ListClass.FirstOrDefault();

            var idGymInstructor = classDTO.GymInstructorId; 



            var newClassDTO = new CreateClassRequestDTO
            {
               Name = classDTO.Name,
               DurationInMinutes = classDTO.DurationInMinutes,
               Schedule = classDTO.Schedule,
            };


            return newClassDTO;

        }


        public async Task<Dictionary<DateTime, List<ClassDTO>>> GetClassesByDayOfTheWeek()
        {
            return await _http.GetFromJsonAsync<Dictionary<DateTime, List<ClassDTO>>>("/api/Class/porDia");
        }

        public async Task<CreateClassResult> CrearClass(CreateClassRequestDTO classModel)
        {

            var result = await _http.PostAsJsonAsync("api/class", classModel);
            if (result.IsSuccessStatusCode)
                return new CreateClassResult { Successful = true, Errors = null };


            return new CreateClassResult { Successful = false, Errors = new List<string> { "Error occured" } };
        }
    }
}
