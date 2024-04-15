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
    public DbSet<ClassType> ClassType { get; set; }
    public DbSet<GymInstructor> GymInstructors { get; set; }
    public DbSet<GymMember> GymMembers { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        //1:N Classes -> ClassType
        modelBuilder.Entity<Classes>()
            .HasOne(c => c.ClassType)
            .WithMany(t => t.Classes)
            .HasForeignKey(c => c.ClassTypeId);

        //1:N Classes -> GymInstructor
        modelBuilder.Entity<Classes>()
            .HasOne(c => c.GymInstructor)
            .WithMany(i => i.Classes)
            .HasForeignKey(c => c.GymInstructorId);

        //1:N Reservation -> GymMember
        modelBuilder.Entity<Reservation>()
            .HasOne(r => r.GymMember)
            .WithMany(m => m.Reservations)
            .HasForeignKey(r => r.GymMemberId)
            .OnDelete(DeleteBehavior.NoAction);

        //1:N Reservation -> Classes
        modelBuilder.Entity<Reservation>()
            .HasOne(r => r.Classes)
            .WithMany(c => c.Reservations)
            .HasForeignKey(r => r.ClassesId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}

