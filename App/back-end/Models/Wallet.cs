using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.Models;

public class Wallet
{
    [Key]
    public int WalletId { get; set; }
    [ForeignKey("NameId")]
    public int NameId { get; set; }
    public string? WalletName { get; set; }
    public string? Description { get; set; }
    public string? Investment { get; set; }
}