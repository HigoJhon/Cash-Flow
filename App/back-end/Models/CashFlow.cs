using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.Models
{
    public class CashFlow
    {
        [Key]
        public int CashFlowId { get; set; }

        [ForeignKey("Wallet")]
        public int WalletId { get; set; }

        public decimal Expense { get; set; }
        public decimal Profit { get; set; }
        public DateTime Date { get; set; }

        public Wallet Wallet { get; set; }
    }    
}