using back_end.Models;
using Microsoft.EntityFrameworkCore;

namespace back_end.Context
{
    public class WalletContext : DbContext, IWalletContext
    {
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<Wallet> Wallets { get; set; } = null!;
        public DbSet<CashFlow> CashFlows { get; set; } = null!;

        public WalletContext(DbContextOptions<WalletContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=localhost;Database=App;User=Sa;Password=SqlServer123!;TrustServerCertificate=True;";
            optionsBuilder.UseSqlServer(connectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CashFlow>()
                .Property(cf => cf.Expense)
                .HasColumnType("decimal(18, 2)");

            modelBuilder.Entity<CashFlow>()
                .Property(cf => cf.Profit)
                .HasColumnType("decimal(18, 2)");

            modelBuilder.Entity<Wallet>()
                .Property(w => w.Investment)
                .HasColumnType("decimal(18, 2)");

            base.OnModelCreating(modelBuilder);
        }
    }
}
