using GYM_DTOs;
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


        public async Task<List<ClassDTO>> ListaClases()
        {
            var result = await _http.GetFromJsonAsync<IEnumerable<ClassDTO>>("api/Class");

            if (result!.Count() != 0)
            {
                return result.ToList();
            }else
            {
                throw new Exception("Error");
            }

        }
    }
}
