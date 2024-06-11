using BlazorFronted.Interfaces;
using GYM_DTOs;
using GYM_DTOs.AccountDTO;
using GYM_DTOs.CreateDTO;
using GYM_DTOs.EntityDTO;
using GYM_DTOs.UpdateDTO;
using System.Net.Http;
using System.Net.Http.Json;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace BlazorFronted.Services
{
    public class ClassService : IClassService
    {
        private readonly HttpClient _http;
        private readonly IClassTypeService _classTypeService;

        public ClassService(HttpClient http, IClassTypeService classTypeService)
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
            var gymInstructor = await _http.GetFromJsonAsync<findGymPersonByIdResult>($"api/GymInstructor/{idGymInstructor}");

            if (gymInstructor == null)
            {
                return null;
            }
            //Necesito el nombre del tipo de clase cuyo id es el de la variable, para poder mostrarlo en el formulario
            var classType = await _classTypeService.findByClassType(idClassType);


            var classTypeName = classType.Name;
            var gymInstructorEmail = gymInstructor.GymInstructorDTO.EmailUser;

            var newClassDTO = new CreateClassRequestDTO
            {

                Schedule = classDTO.Schedule,
                ClassTypeName = classTypeName,
                emailInstructor = gymInstructorEmail,
                Capacity = classDTO.Capacity
            };


            return newClassDTO;

        }

        public async Task<List<ClassDTO>> ClassesListByGymInstructor(int idGymInstructor)
        {
            var result = await _http.GetFromJsonAsync<ClassListResult>($"api/Class/GetClassesByGymInstructor/{idGymInstructor}");


            if (!result.Successful)
            {
                return null;
            }

            return result.ListClass!.ToList();

        }

        public async Task<Dictionary<DateTime, List<ClassDTO>>> GetClassesByDayOfTheWeek()
        {
            return await _http.GetFromJsonAsync<Dictionary<DateTime, List<ClassDTO>>>("/api/Class/porDia");
        }

        public async Task<CreateClassResult> CreateClass(CreateClassRequestDTO classModel)
        {

            var result = await _http.PostAsJsonAsync("api/class", classModel);
            if (result.IsSuccessStatusCode)
                return new CreateClassResult { Successful = true, Errors = null };


            return new CreateClassResult { Successful = false, Errors = new List<string> { "Error occured" } };
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

        public async Task<ResponseAPI<ClassDTO>> MakeReservation(int id, string email)
        {
            CreateReservationRequest data = new CreateReservationRequest { id = id, email = email };

            var result = await _http.PostAsJsonAsync("api/reservation", data);

            if (!result.IsSuccessStatusCode)
            {
                var result2 = await result.Content.ReadFromJsonAsync<ResponseAPI<string>>();

                return new ResponseAPI<ClassDTO> { Correct = false, Menssage = result2.Menssage };
            }
                

            return new ResponseAPI<ClassDTO> { Correct = true, Menssage = null };
        }

        public async Task<ResponseAPI<ClassDTO>> CancelReservation(int id, string email)
        {
            var idReservation = await _http.GetFromJsonAsync<int>($"api/reservation/{id}/{email}");


            var result = await _http.DeleteAsync($"api/reservation/{idReservation}");

            if (!result.IsSuccessStatusCode)
                return new ResponseAPI<ClassDTO> { Correct = false, Menssage = "No se ha podido cancelar la reserva" };

            return new ResponseAPI<ClassDTO> { Correct = true, Menssage = null };
        }

        public async Task<List<ClassDTO>> GetClassesByGymMember(string email)
        {
            var listClass = await _http.GetFromJsonAsync<List<ClassDTO>>($"api/reservation/GetClassesByGymMember/{email}");

            if (listClass == null)
            {
                return null;
            }

            return listClass;
        }


        public async Task<List<GymMemberDTO>> GetGymMembersByClass(int id)
        {
            var listGymMembers = await _http.GetFromJsonAsync<GymMemberListResult>($"api/reservation/GetReservationsByClass/{id}");

            if (listGymMembers == null)
            {
                return null;
            }

            return listGymMembers.ListGymMembers;
        }

        public async Task<ResponseAPI<string>> CheckClassAvailability(CreateClassRequestDTO classModel)
        {
            var classes = await ClassesList();

            if (!classes.Successful)
            {
                return new ResponseAPI<string> { Correct = true };
            }

            var fechaHoy = DateTime.Now;

            if (classModel.Schedule < fechaHoy)
            {
                return new ResponseAPI<string> { Correct = false, Menssage = "No puedes crear clases con fechas anteriores a la de hoy" };
            }

            if (classModel.Schedule.DayOfWeek == DayOfWeek.Sunday)
            {
                return new ResponseAPI<string> { Correct = false, Menssage = "No puedes crear clases un domingo" };
            }
            



            var listClasses = classes.ListClass;

            foreach (var item in listClasses!)
            {

                if (item.Schedule.Date == classModel.Schedule.Date)
                {
                    if (item.Schedule.Hour == classModel.Schedule.Hour)
                    {
                        return new ResponseAPI<string> { Correct = false, Menssage = "Ya hay una clase en esta misma fecha y hora" };
                    }
                }


            }

            return new ResponseAPI<string> { Correct = true };
        }


        

    }
}
