using back_end.Models;
using Microsoft.EntityFrameworkCore;

namespace back_end.Context;

public class AppContext : DbContext, IAppContext
{
    public DbSet<User> Users { get; set; }

    public AppContext(DbContextOptions<AppContext> options) : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var connectionString = "Server=localhost;Database=brasfut;User=Sa;Password=SqlServer123!;TrustServerCertificate=True;";
        optionsBuilder.UseSqlServer(connectionString);
    }
}