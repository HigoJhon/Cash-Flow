using System.ComponentModel.DataAnnotations;

namespace back_end.Models;

public class User
{
    [Key]
    public int NameId { get; set; }
    [Required]
    public string? Name { get; set; }
    [Required]
    public string? Telephone { get; set; }
    [Required]
    [EmailAddress]
    [UniqueEmail()]
    public string? Email { get; set; }
    [Required]
    [MinLength(6)]
    public string? Password { get; set; }
}