using GYM_DTOs;
using GYM_DTOs.EntityDTO;
using System.Net.Http.Json;

namespace BlazorFronted.Services
{
    public class UserService : IUserService
    {
        private readonly HttpClient _http;

        public UserService(HttpClient http)
        {
            _http = http;
        }

        public async Task<UserListResult> UserList()
        {
            var result = await _http.GetFromJsonAsync<UserListResult>("api/User");

            return result;

        }

    }
}
