using back_end.Models;
using back_end.Repository;
using Microsoft.AspNetCore.Mvc;
using System;

namespace back_end.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WalletController : ControllerBase
    {
        private readonly IWalletRepository _walletRepository;

        public WalletController(IWalletRepository walletRepository)
        {
            _walletRepository = walletRepository;
        }

        // [HttpGet("{id}")]
        // public IActionResult GetWallet(int id)
        // {
        //     try
        //     {
        //         var wallet = _walletRepository.GetAllWallet(id);
        //         return Ok(wallet);
        //     }
        //     catch (Exception e)
        //     {
        //         return BadRequest(e.Message);
        //     }
        // }

        [HttpGet("{id}")]
        public List<Wallet> GetWallet(int id)
        {
            return _walletRepository.GetAllWallet(id);
        }

        [HttpPost]
        public IActionResult AddWallet([FromBody] Wallet wallet)
        {
            try
            {
                var newWallet = _walletRepository.AddWallet(wallet);
                return Ok(newWallet);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut]
        public IActionResult UpdateWallet([FromBody] Wallet wallet)
        {
            try
            {
                var updatedWallet = _walletRepository.UpdateWallet(wallet);
                return Ok(updatedWallet);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteWallet(int id)
        {
            try
            {
                var deletedWallet = _walletRepository.DeleteWallet(id);
                return Ok(deletedWallet);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}