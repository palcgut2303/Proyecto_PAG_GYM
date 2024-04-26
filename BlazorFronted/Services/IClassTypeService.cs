using GYM_DTOs.EntityDTO;

namespace BlazorFronted.Services
{
    public interface IClassTypeService
    {
        Task<ClassTypeListResult> ClassTypeList();
        Task<ClassTypeDTO> Buscar(int id);

        Task<int> Guardar(ClassTypeDTO classType);

        Task<int> Editar(ClassTypeDTO classType);

        Task<bool> Borrar(int id);
    }
}
