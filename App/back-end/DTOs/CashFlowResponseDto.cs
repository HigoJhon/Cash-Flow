public class CashFlowResponseDto
{
    public int CashFlowId { get; set; }
    public int WalletId { get; set; }
    public decimal Expense { get; set; }
    public decimal Profit { get; set; }
    public DateTime Date { get; set; }
    public WalletDto? Wallet { get; set; }

    public class WalletDto
    {
        public int WalletId { get; set; }
        public int NameId { get; set; }
        public string? WalletName { get; set; }
        public string? Description { get; set; }
        public decimal Investment { get; set; }
    }
}
