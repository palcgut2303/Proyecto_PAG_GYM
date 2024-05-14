using GYM_DTOs;
using GYM_DTOs.EntityDTO;
using GYM_DTOs.UpdateDTO;
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

        public async Task<ClassTypeDTO> findByClassType(int id)
        {
            var result = await _http.GetFromJsonAsync<findClassTypeByIdResult>($"api/ClassType/{id}");

            if (result!.Successful)
            {
                return result.ClassTypeDTO;
            }
            else
            {
                throw new Exception(result.Error);
            }
        }

        public async Task<ResponseAPI<bool>> Save(ClassTypeDTO classType)
        {
            var result = await _http.PostAsJsonAsync("api/classtype", classType);
            if (result.IsSuccessStatusCode)
            {
                return new ResponseAPI<bool> { EsCorrecto = true };
            }

            return new ResponseAPI<bool> { EsCorrecto = false };
        }

        public async Task<ResponseAPI<UpdateClassTypeRequestDTO>> Update(UpdateClassTypeRequestDTO classType,int id)
        {
            var result = await _http.PutAsJsonAsync($"api/classtype/{id}", classType);
            if (!result.IsSuccessStatusCode)
                return new ResponseAPI<UpdateClassTypeRequestDTO> { EsCorrecto = false, Mensaje = "No se ha podido actualizar" };

            return new ResponseAPI<UpdateClassTypeRequestDTO> { EsCorrecto = true, Mensaje = null };
        }

        public async Task<bool> Delete(int id)
        {
            var result = await _http.DeleteAsync($"api/classtype/{id}");

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
