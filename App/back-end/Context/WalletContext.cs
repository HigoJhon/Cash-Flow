using back_end.Models;
using Microsoft.EntityFrameworkCore;

namespace back_end.Context;

public class WalletContext : DbContext, IWalletContext
{
    public DbSet<User> Users { get; set; }

    public WalletContext(DbContextOptions<WalletContext> options) : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var connectionString = "Server=localhost;Database=App;User=Sa;Password=SqlServer123!;TrustServerCertificate=True;";
        optionsBuilder.UseSqlServer(connectionString);
    }
}