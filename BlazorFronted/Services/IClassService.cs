using GYM_DTOs.EntityDTO;

namespace BlazorFronted.Services
{
    public interface IClassService
    {
        Task<List<ClassDTO>> ListaClases();
    }
}
