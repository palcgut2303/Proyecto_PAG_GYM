using GYM_DTOs.EntityDTO;
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


        public async Task<ClassListResult> ListaClases()
        {
            var result = await _http.GetFromJsonAsync<ClassListResult>("api/Class");

            return result;

        }
    }
}
