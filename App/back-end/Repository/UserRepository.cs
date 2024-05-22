using back_end.Models;
using back_end.Context;

namespace back_end.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly IAppContext _context;

        public UserRepository(IAppContext context)
        {
            _context = context;
        }

        public User GetAll()
        {
            throw new NotImplementedException();
        }

        public User AddUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }

        public User GetUser(int id)
        {
            return _context.Users.Find(id)!;
        }

        public User UpdateUser(User user)
        {
            _context.Users.Update(user);
            _context.SaveChanges();
            return user;
        }

        public User DeleteUser(int id)
        {
            User user = _context.Users.Find(id)!;
            if (user != null)
            {
                _context.Users.Remove(user);
                _context.SaveChanges();
            }
            return user!;
        }
    }
}