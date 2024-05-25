using System.ComponentModel.DataAnnotations;

namespace back_end.Models;

public class User
{
    [Key]
    public int NameId { get; set; }
    public string? Name { get; set; }
    public string? Telephone { get; set; }
    public string? Email { get; set; }
    public string? Password { get; set; }
}