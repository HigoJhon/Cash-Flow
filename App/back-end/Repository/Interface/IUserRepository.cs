using back_end.Models;

namespace back_end.Repository
{
    public interface IUserRepository
    {
        User GetAll();
        User GetUser(int id);
        User AddUser(User user);
        User UpdateUser(User user);
        User DeleteUser(int id);
    }
}
