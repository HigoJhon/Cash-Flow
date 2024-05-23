using back_end.Models;
using back_end.Context;

namespace back_end.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly IWalletContext _context;

        public UserRepository(IWalletContext context)
        {
            _context = context;
        }

        public User Login(string email, string password)
        {
            return _context.Users.SingleOrDefault(user => user.Email == email && user.Password == password)!;
        }

        public User AddUser(User user)
        {
            if (_context.Users.Any(u => u.Email == user.Email))
            {
                throw new ArgumentException("Email already exists");
            }
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