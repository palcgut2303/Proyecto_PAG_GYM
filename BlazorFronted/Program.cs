using BlazorFronted;
using BlazorFronted.Services;
using CurrieTechnologies.Razor.SweetAlert2;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri("http://localhost:5117") });

builder.Services.AddTransient<IClassService, ClassService>();
builder.Services.AddTransient<IClassTypeService, ClassTypeService>();

builder.Services.AddSweetAlert2();

await builder.Build().RunAsync();
