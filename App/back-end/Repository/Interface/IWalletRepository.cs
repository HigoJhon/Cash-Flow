using back_end.Models;

namespace back_end.Repository
{
    public interface IWalletRepository
    {
        List<Wallet> GetAllWallet(int id);
        Wallet AddWallet(Wallet wallet);
        Wallet UpdateWallet(Wallet wallet);
        Wallet DeleteWallet(int id);
    }
}