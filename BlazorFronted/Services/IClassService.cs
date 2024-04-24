using GYM_DTOs.EntityDTO;

namespace BlazorFronted.Services
{
    public interface IClassService
    {
        Task<ClassListResult> ListaClases();
    }
}
