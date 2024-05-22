using back_end.Models;
using back_end.Repository;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers;

[ApiController]
[Route("[controller]")]

public class UserController : Controller
{
    protected readonly IUserRepository _userRepository;

    public UserController(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    [HttpGet]
    public IActionResult GetUser()
    {
        User user = _userRepository.GetAll();
        return Ok(user);
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

    [HttpPost]
    public IActionResult AddUser([FromBody] User user)
    {
        User newUser = _userRepository.AddUser(user);
        return CreatedAtAction(nameof(GetUser), new { id = newUser.NameId }, newUser);
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