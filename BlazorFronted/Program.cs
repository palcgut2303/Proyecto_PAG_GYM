using Blazored.LocalStorage;
using BlazorFronted;
using BlazorFronted.Interfaces;
using BlazorFronted.Services;
using BlazorFronted.Utility;
using CurrieTechnologies.Razor.SweetAlert2;
using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Radzen;



var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");
builder.Services.AddBlazoredLocalStorage();
builder.Services.AddAuthorizationCore();
//builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri("http://localhost:5117") });
builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri("https://apigympag.somee.com") });
builder.Services.AddScoped<AuthenticationStateProvider, CustomAuthenticationStateProvider>();
builder.Services.AddTransient<IAuthService, AuthService>();
builder.Services.AddTransient<IClassService, ClassService>();
builder.Services.AddTransient<IClassTypeService, ClassTypeService>();
builder.Services.AddTransient<IUserService, UserService>();
builder.Services.AddTransient<IGymMemberService, GymMemberService>();
builder.Services.AddTransient<IGymInstructorService, GymInstructorService>();

builder.Services.AddSweetAlert2();
builder.Services.AddRadzenComponents();
builder.Services.AddBlazorBootstrap();
await builder.Build().RunAsync();
