using GYM_DTOs;

namespace BlazorFronted.Services
{
    public interface IClassTypeService
    {
        Task<List<ClassTypeDTO>> Lista();
        Task<ClassTypeDTO> Buscar(int id);

        Task<int> Guardar(ClassTypeDTO classType);

        Task<int> Editar(ClassTypeDTO classType);

        Task<bool> Borrar(int id);
    }
}
