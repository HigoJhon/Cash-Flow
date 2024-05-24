using System.ComponentModel.DataAnnotations;

namespace back_end.Models;

public class User
{
    [Key]
    public int NameId { get; set; }
    public string? Name { get; set; }
    public string? Telephone { get; set; }
    [Required]
    [EmailAddress]
    public string? Email { get; set; }
    [Required]
    [MinLength(6)]
    public string? Password { get; set; }
}