using GYM_DTOs;
using GYM_DTOs.EntityDTO;
using System.Net.Http.Json;

namespace BlazorFronted.Services
{
    public class ClassTypeService : IClassTypeService
    {
        private readonly HttpClient _http;

        public ClassTypeService(HttpClient http)
        {
            this._http = http;
        }

        public async Task<ClassTypeListResult> ClassTypeList()
        {
            var result =  await _http.GetFromJsonAsync<ClassTypeListResult>("api/ClassType");

            return result;
        }

        public async Task<ClassTypeDTO> Buscar(int id)
        {
            var result = await _http.GetFromJsonAsync<ResponseAPI<ClassTypeDTO>>($"api/Class/{id}");

            if (result!.EsCorrecto)
            {
                return result.Valor;
            }
            else
            {
                throw new Exception(result.Mensaje);
            }
        }

        public Task<int> Guardar(ClassTypeDTO classType)
        {
            throw new NotImplementedException();
        }

        public Task<int> Editar(ClassTypeDTO classType)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Borrar(int id)
        {
            throw new NotImplementedException();
        }
    }
}
