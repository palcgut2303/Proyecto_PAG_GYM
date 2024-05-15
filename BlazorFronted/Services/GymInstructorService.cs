using GYM_DTOs;
using System.Net.Http.Json;

namespace BlazorFronted.Services
{
    public class GymInstructorService : IGymInstructorService
    {
        private readonly HttpClient _http;

        public GymInstructorService(HttpClient http)
        {
            _http = http;
        }

        public async Task<findGymPersonByIdResult> GymInstructorByEmail(string email)
        {
            var result = await _http.GetFromJsonAsync<findGymPersonByIdResult>($"api/GymInstructor/email/{email}");

            return result;

        }

        public async Task<findGymPersonByIdResult> GymInstructorById(int id)
        {
            var result = await _http.GetFromJsonAsync<findGymPersonByIdResult>($"api/GymInstructor/{id}");

            return result;

        }
    }
}
