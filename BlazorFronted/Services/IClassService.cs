using GYM_DTOs;

namespace BlazorFronted.Services
{
    public interface IClassService
    {
        Task<List<ClassDTO>> ListaClases();
    }
}
