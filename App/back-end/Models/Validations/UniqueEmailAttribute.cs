using System.ComponentModel.DataAnnotations;
using back_end.Context;

public class UniqueEmailAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        var context = validationContext.GetRequiredService<WalletContext>();
        var entity = context.Users.SingleOrDefault(u => u.Email == (string)value);

        if (entity != null)
        {
            return new ValidationResult(GetErrorMessage());
        }

        return ValidationResult.Success!;
    }

    public string GetErrorMessage()
    {
        return "Email is already in use.";
    }
}