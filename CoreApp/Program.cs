// from G:\devlab\FirstToday\FirstToday\NewFolder

using Angular7;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;


using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

var configuration = new ConfigurationBuilder()
               .SetBasePath(Directory.GetCurrentDirectory())
               .AddJsonFile("appsettings.json")
.Build();

builder.Services.AddDbContext<atContext>(options =>
        options.UseSqlServer(
        configuration.GetConnectionString("DefaultConnection"),
        ef => ef.MigrationsAssembly(typeof(atContext).Assembly.FullName)));
builder.Services.AddScoped<IatContext>(provider => provider.GetService<atContext>());


// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddControllers().AddJsonOptions(x =>
    x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
;
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseDefaultFiles().UseWelcomePage("/wwwroot");
app.UseRouting();



app.UseDefaultFiles();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapFallbackToFile("/index.html");
app.Run();
