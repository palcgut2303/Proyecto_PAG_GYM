using GYM_DTOs;
using GYM_DTOs.AccountDTO;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
using GYM_DTOs.UpdateDTO;
using System.Net.Http;
using System.Net.Http.Json;

namespace BlazorFronted.Services
{
    public class ClassService : IClassService
    {
        private readonly HttpClient _http;
        private readonly IClassTypeService _classTypeService;

        public ClassService(HttpClient http,IClassTypeService classTypeService)
        {
            _http = http;
            this._classTypeService = classTypeService;
        }


        public async Task<ClassListResult> ClassesList()
        {
            var result = await _http.GetFromJsonAsync<ClassListResult>("api/Class");

            return result;

        }

        public async Task<CreateClassRequestDTO> findByIdClass(int id)
        {
            var result = await _http.GetFromJsonAsync<ClassListResult>($"api/Class/{id}");

            if (!result.Successful)
            {
                return null;
            }

            var classDTO = result.ListClass.FirstOrDefault();

            var idGymInstructor = classDTO.GymInstructorId; 

            var idClassType = classDTO.ClassTypeId;

            //Necesito el nombre del instructor cuyo id es el de la variable, para poder mostrarlo en el formulario
            var gymInstructor = await _http.GetFromJsonAsync<findGymInstructorByIdResult>($"api/GymInstructor/{idGymInstructor}");

            if(gymInstructor == null)
            {
                return null;
            }
            //Necesito el nombre del tipo de clase cuyo id es el de la variable, para poder mostrarlo en el formulario
            var classType = await _classTypeService.Buscar(idClassType);


            var classTypeName = classType.Name;
            var gymInstructorEmail = gymInstructor.GymInstructorDTO.EmailUser;

            var newClassDTO = new CreateClassRequestDTO
            {
               Name = classDTO.Name,
               DurationInMinutes = classDTO.DurationInMinutes,
               Schedule = classDTO.Schedule,
               ClassTypeName = classTypeName,
               emailInstructor = gymInstructorEmail
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

        public async Task<ResponseAPI<ClassDTO>> UpdateClass(int id,UpdateClassRequestDTO classModel)
        {
            var result = await _http.PutAsJsonAsync($"api/class/{id}", classModel);
            if (!result.IsSuccessStatusCode)
                return new ResponseAPI<ClassDTO> { EsCorrecto = false, Mensaje = "No se ha podido actualizar" };

            return new ResponseAPI<ClassDTO> { EsCorrecto = true, Mensaje = null };
        }

        public async Task<bool> DeleteClass(int id)
        {
            var result = await _http.DeleteAsync($"api/class/{id}");

            if (result.IsSuccessStatusCode)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

    }
}
