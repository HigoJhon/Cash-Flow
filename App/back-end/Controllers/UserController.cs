using back_end.Models;
using back_end.Repository;
using Microsoft.AspNetCore.Mvc;
using System;

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
            try
            {
                User loginUser = _userRepository.Login(user.Email!, user.Password!);
                return Ok("Login successful");
            }
            catch (ArgumentException ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            try
            {
                User user = _userRepository.GetUser(id);
                return Ok(user);
            }
            catch (ArgumentException ex)
            {
                return NotFound(new { message = ex.Message });
            }
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
                return Conflict(new { message = e.Message });
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateUser(int id, [FromBody] User user)
        {
            if (id != user.NameId)
            {
                return BadRequest(new { message = "User ID does not match the provided ID." });
            }

            try
            {
                User updatedUser = _userRepository.UpdateUser(user);
                return Ok(updatedUser);
            }
            catch (ArgumentException ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            try
            {
                User user = _userRepository.DeleteUser(id);
                return Ok(user);
            }
            catch (ArgumentException ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }
    }
}
