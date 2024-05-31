using back_end.Context;
using back_end.Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<WalletContext>();
builder.Services.AddScoped<IWalletContext, WalletContext>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IWalletRepository, WalletRepository>();
builder.Services.AddScoped<ICashFlowRepository, CashFlowRepository>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.WebHost.ConfigureKestrel(options =>
{
    options.ListenAnyIP(5000); // HTTP
    options.ListenAnyIP(7037, listenOptions =>
    {
        listenOptions.UseHttps(); // Use HTTPS
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAllOrigins");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
