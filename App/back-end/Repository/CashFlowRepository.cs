using back_end.Models;
using back_end.Context;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace back_end.Repository
{
    public class CashFlowRepository : ICashFlowRepository
    {
        private readonly IWalletContext _context;

        public CashFlowRepository(IWalletContext context)
        {
            _context = context;
        }

        public CashFlowResponseDto GetCashFlow(int id)
        {
            var cashFlow = _context.CashFlows
                .Include(c => c.Wallet)
                .FirstOrDefault(c => c.CashFlowId == id);
            if (cashFlow == null)
            {
                throw new ArgumentException("Cash flow not found.");
            }

            return new CashFlowResponseDto
            {
                CashFlowId = cashFlow.CashFlowId,
                WalletId = cashFlow.Wallet!.WalletId,
                Expense = cashFlow.Expense,
                Profit = cashFlow.Profit,
                Date = cashFlow.Date,
                Wallet = new CashFlowResponseDto.WalletDto
                {
                    NameId = cashFlow.Wallet!.NameId,
                    WalletName = cashFlow.Wallet.WalletName,
                    Description = cashFlow.Wallet.Description,
                    Investment = cashFlow.Wallet.Investment
                }
            };
        }

        public CashFlow AddCashFlow(CashFlow cashFlow)
        {
            var existingCashFlow = _context.CashFlows.Find(cashFlow.CashFlowId);
            if (existingCashFlow != null)
            {
                throw new ArgumentException("Cash flow already exists.");
            }
            _context.CashFlows.Add(cashFlow);
            _context.SaveChanges();
            return cashFlow;
        }

        public CashFlow DeleteAllCashFlow(int id)
        {
            var cashFlow = _context.CashFlows.Find(id);
            if (cashFlow == null)
            {
                throw new ArgumentException("Cash flow not found.");
            }
            _context.CashFlows.Remove(cashFlow);
            _context.SaveChanges();
            return cashFlow;
        }

    }
}
