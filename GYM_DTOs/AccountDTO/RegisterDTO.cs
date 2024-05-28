using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace GYM_DTOs.AccountDTO
{
    public class RegisterDTO
    {
        [Required(ErrorMessage = "Obligatorio")]
        [EmailAddress(ErrorMessage = "El formato del correo electrónico no es válido.")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Obligatorio")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Obligatorio")]
        public string FullName { get; set; }

        [PasswordValidation(MinLength = 8, RequireUppercase = true, RequireLowercase = true, RequireDigit = true, RequireSpecialCharacter = true, ErrorMessage = "La contraseña no cumple con los requisitos.")]
        [Required(ErrorMessage = "Obligatorio")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public string? EmailCode { get; set; }
    }

    public class PasswordValidationAttribute : ValidationAttribute
    {
        public int MinLength { get; set; } = 8;
        public bool RequireUppercase { get; set; } = true;
        public bool RequireLowercase { get; set; } = true;
        public bool RequireDigit { get; set; } = true;
        public bool RequireSpecialCharacter { get; set; } = true;

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var password = value as string;

            if (string.IsNullOrEmpty(password))
            {
                return new ValidationResult("La contraseña es obligatoria.");
            }

            if (password.Length < MinLength)
            {
                return new ValidationResult($"La contraseña debe tener al menos {MinLength} caracteres.");
            }

            if (RequireUppercase && !password.Any(char.IsUpper))
            {
                return new ValidationResult("La contraseña debe contener al menos una letra mayúscula.");
            }

            if (RequireLowercase && !password.Any(char.IsLower))
            {
                return new ValidationResult("La contraseña debe contener al menos una letra minúscula.");
            }

            if (RequireDigit && !password.Any(char.IsDigit))
            {
                return new ValidationResult("La contraseña debe contener al menos un dígito.");
            }

            if (RequireSpecialCharacter && !Regex.IsMatch(password, @"[\W_]"))
            {
                return new ValidationResult("La contraseña debe contener al menos un carácter especial.");
            }

            return ValidationResult.Success;
        }
    }
}