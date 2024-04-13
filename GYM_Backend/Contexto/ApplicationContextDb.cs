using GYM_Backend.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GYM_Backend.Contexto;
public class ApplicationContextDb : IdentityDbContext
{
    public ApplicationContextDb(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Classes> Classes {  get; set; }
    public DbSet<TypeOfClass> TypesOfClasses { get; set; }
}

