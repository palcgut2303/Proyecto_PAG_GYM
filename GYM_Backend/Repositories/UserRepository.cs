using GYM_Backend.Contexto;
using GYM_Backend.Interfaces;
using GYM_Backend.Models;
using GYM_DTOs.AccountDTO;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GYM_Backend.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationContextDb _contextDb;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public UserRepository(ApplicationContextDb dbContext, UserManager<User> userManager,RoleManager<IdentityRole> roleManager)
        {
            this._contextDb = dbContext;
            this._userManager = userManager;
            this._roleManager = roleManager;

           
        }


    }
}
