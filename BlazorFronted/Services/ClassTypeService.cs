﻿using BlazorFronted.Interfaces;
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
            var result = await _http.GetFromJsonAsync<ClassTypeListResult>("api/ClassType");

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
                return new ResponseAPI<bool> { Correct = true };
            }

            return new ResponseAPI<bool> { Correct = false };
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

        public async Task<ResponseAPI<List<ClassDTO>>> GetClassByType(string typeClass)
        {
            var result = await _http.GetFromJsonAsync<ResponseAPI<List<ClassDTO>>>($"api/class/GetClassesByType/{typeClass}");

            if (result is null)
            {
                return new ResponseAPI<List<ClassDTO>> { Correct = false, Menssage = "No se ha podido obtener las clases" };
            }


            return result;

        }
    }
}
