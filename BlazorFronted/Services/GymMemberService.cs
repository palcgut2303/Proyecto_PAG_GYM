using GYM_DTOs;
using System.Net.Http.Json;

namespace BlazorFronted.Services
{
    public class GymMemberService : IGymMemberService
    {
        private readonly HttpClient _http;

        public GymMemberService(HttpClient http)
        {
            _http = http;
        }

        public async Task<findGymPersonByIdResult> GymMemberByEmail(string email)
        {
            var result = await _http.GetFromJsonAsync<findGymPersonByIdResult>($"api/GymMember/email/{email}");

            return result;

        }

        public async Task<findGymPersonByIdResult> GymMemberById(int id)
        {
            var result = await _http.GetFromJsonAsync<findGymPersonByIdResult>($"api/GymMember/{id}");

            return result;

        }

    }
}
