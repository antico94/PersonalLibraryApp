using Microsoft.EntityFrameworkCore;
using TrainingEntity.Data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<TrainingEntityContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("TrainingEntityContext") ??
                         throw new InvalidOperationException("Connection string 'TrainingEntityContext' not found.")));

// Add services to the container.
builder.Services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();



app.MapControllerRoute(
    "default",
    "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");
app.Run();