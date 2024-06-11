using GYM_DTOs;
using GYM_DTOs.EntityDTO;
using GYM_DTOs.UpdateDTO;

namespace BlazorFronted.Interfaces
{
    public interface IClassTypeService
    {
        Task<ClassTypeListResult> ClassTypeList();
        Task<ClassTypeDTO> findByClassType(int id);
        Task<ResponseAPI<bool>> Save(ClassTypeDTO classType);
        Task<bool> Delete(int id);
        //Task<ResponseAPI<UpdateClassTypeRequestDTO>> Update(UpdateClassTypeRequestDTO classType, int id);
        Task<ResponseAPI<List<ClassDTO>>> GetClassByType(string typeClass);
    }
}
