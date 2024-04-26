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

        public async Task<Dictionary<DateTime, List<ClassDTO>>> GetClassesByDayOfTheWeek()
        {
            return await _http.GetFromJsonAsync<Dictionary<DateTime, List<ClassDTO>>>("/api/Class/porDia");
        }
    }
}
