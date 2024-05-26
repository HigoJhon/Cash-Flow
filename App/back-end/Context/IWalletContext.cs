using back_end.Models;
using Microsoft.EntityFrameworkCore;

namespace back_end.Context
{
    public interface IWalletContext
    {
        DbSet<User> Users { get; set; }
        DbSet<Wallet> Wallets { get; set; }

        int SaveChanges();
    }
}