using back_end.Models;
using back_end.Context;

namespace back_end.Repository
{   
    public class WalletRepository : IWalletRepository
    {
        private readonly IWalletContext _context;

        public WalletRepository(IWalletContext context)
        {
            _context = context;
        }

        public List<Wallet> GetAllWallet(int id)
        {
            return _context.Wallets.Where(w => w.NameId == id).ToList();
        }

        public Wallet AddWallet(Wallet wallet)
        {
            _context.Wallets.Add(wallet);
            _context.SaveChanges();
            return wallet;
        }

        public Wallet UpdateWallet(Wallet wallet)
        {
            _context.Wallets.Update(wallet);
            _context.SaveChanges();
            return wallet;
        }

        public Wallet DeleteWallet(int id)
        {
            Wallet wallet = _context.Wallets.Find(id)!;
            if (wallet != null)
            {
                _context.Wallets.Remove(wallet);
                _context.SaveChanges();
            }
            return wallet!;
        }
    }

}