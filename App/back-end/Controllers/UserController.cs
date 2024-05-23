using back_end.Models;
using back_end.Repository;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        protected readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User user)
        {
            if (user.Email == null || user.Password == null)
            {
                return BadRequest();
            }
            
            User loginUser = _userRepository.Login(user.Email!, user.Password!);
            if (loginUser == null)
            {
                return NotFound();
            }
            return Ok("Login successful");
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            User user = _userRepository.GetUser(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost("add")]
        public IActionResult AddUser([FromBody] User user)
        {
            try
            {
                User newUser = _userRepository.AddUser(user);
                return CreatedAtAction(nameof(GetUser), new { id = newUser.NameId }, newUser);
            }
            catch (ArgumentException e)
            {
                return BadRequest( new { message = e.Message } );
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateUser(int id, [FromBody] User user)
        {
            if (id != user.NameId)
            {
                return BadRequest();
            }

            User updatedUser = _userRepository.UpdateUser(user);
            if (updatedUser == null)
            {
                return NotFound();
            }
            return Ok(updatedUser);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            User user = _userRepository.DeleteUser(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
    }
}
