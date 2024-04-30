using Blazored.LocalStorage;
using Microsoft.AspNetCore.Components.Authorization;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text.Json;
using System.Text;
using BlazorFronted.Utility;
using GYM_DTOs.AccountDTO;
using System.Security.Claims;
using Newtonsoft.Json.Linq;
using System.IdentityModel.Tokens.Jwt;

namespace BlazorFronted.Services
{
    public class AuthService : IAuthService
    {
        private readonly HttpClient _httpClient;
        private readonly AuthenticationStateProvider _authenticationStateProvider;
        private readonly ILocalStorageService _localStorage;

        public AuthService(HttpClient httpClient,
                           AuthenticationStateProvider authenticationStateProvider,
                           ILocalStorageService localStorage)
        {
            _httpClient = httpClient;
            _authenticationStateProvider = authenticationStateProvider;
            _localStorage = localStorage;
        }

        public async Task<RegisterResult> Register(RegisterDTO registerModel)
        {
            var result = await _httpClient.PostAsJsonAsync("api/User/register", registerModel);
            if (result.IsSuccessStatusCode)
                return new RegisterResult { Successful = true, Errors = null };


            return new RegisterResult { Successful = false, Errors = new List<string> { "Error occured" } };
        }

        

        public async Task<LoginResult> Login(LoginDTO loginModel)
        {
            var loginAsJson = JsonSerializer.Serialize(loginModel);
            var response = await _httpClient.PostAsync("api/User/login", new StringContent(loginAsJson, Encoding.UTF8, "application/json"));
            var loginResult = JsonSerializer
                .Deserialize<LoginResult>(
                    await response.Content.ReadAsStringAsync(), 
                    new JsonSerializerOptions { PropertyNameCaseInsensitive = true }
                   );

            if (!response.IsSuccessStatusCode)
            {
                return loginResult!;
            }
            


            await _localStorage.SetItemAsync("authToken", loginResult!.Token);
            ((CustomAuthenticationStateProvider)_authenticationStateProvider).MarkUserAsAuthenticated(loginResult.Token!);
            _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("bearer", loginResult.Token);

            return loginResult;
        }

        public async Task Logout()
        {
            await _localStorage.RemoveItemAsync("authToken");
            await _localStorage.RemoveItemAsync("Role");
            ((CustomAuthenticationStateProvider)_authenticationStateProvider).MarkUserAsLoggedOut();
            _httpClient.DefaultRequestHeaders.Authorization = null;
        }

        public async Task<string> GetRole()
        {
            var authState = await _authenticationStateProvider.GetAuthenticationStateAsync();
            var user = authState.User;

            // Verifica si el usuario está autenticado
            if (user.Identity!.IsAuthenticated)
            {
                // Obtiene el token de autenticación
                var token = await _localStorage.GetItemAsync<string>("authToken");

                var handler = new JwtSecurityTokenHandler();
                var tokenRead = handler.ReadJwtToken(token);

                if (tokenRead != null)
                {
                    //// Decodifica el token JWT
                    //var handler = new JwtSecurityTokenHandler();
                    //var jsonToken = handler.ReadToken(token) as JwtSecurityToken;

                    //// Extrae el claim del rol del token
                    //var roleClaim = jsonToken.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Role);

                    //if (roleClaim != null)
                    //{
                    //    // Devuelve el valor del rol
                    //    return roleClaim.Value;
                    //}
                    //else
                    //{
                    //    return "roleClaim NULO";
                    //}

                    var rol = tokenRead.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Role)?.Value;


                    return rol;
                }
                else
                {
                    return "TOKEN NULO";
                }
            }
            else
            {
                return "No autenticado";
            }
        }

    }
}
