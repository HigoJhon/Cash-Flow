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
            var user = _context.Users.FirstOrDefault(u => u.Email == email);
            if (user == null)
            {
                throw new ArgumentException("Email not registered.");
            }
            if (user.Password != password)
            {
                throw new ArgumentException("Incorrect password.");
            }
            return user;
        }

        public User AddUser(User user)
        {
            var existingUser = _context.Users.FirstOrDefault(u => u.Email == user.Email);
            if (existingUser != null)
            {
                throw new ArgumentException("Email already in use.");
            }
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }

        public User GetUser(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null)
            {
                throw new ArgumentException("User not found.");
            }
            return user;
        }

        public User UpdateUser(User user)
        {
            var existingUser = _context.Users.Find(user.NameId);
            if (existingUser == null)
            {
                throw new ArgumentException("User not found.");
            }
            _context.Users.Update(user);
            _context.SaveChanges();
            return user;
        }

        public User DeleteUser(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null)
            {
                throw new ArgumentException("User not found.");
            }
            _context.Users.Remove(user);
            _context.SaveChanges();
            return user;
        }
    }
}
