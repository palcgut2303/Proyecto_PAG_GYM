using GYM_Backend.Models;
using GYM_DTOs;

namespace GYM_Backend.Mappers
{
    public static class ClassTypeMapper
    {
        public static ClassTypeDTO toClassTypeDTO(this ClassType model)
        {
           

            return new ClassTypeDTO
            {
                Id = model.Id,
                Name = model.Name,
                Description = model.Description,
               

            };
        }

        public static ClassType toClassTypeFromDTO(this CreatedClassTypeRequestDTO model) {

            return new ClassType
            {
                Name = model.Name,
                Description = model.Description,
            };
        }
    }
}
