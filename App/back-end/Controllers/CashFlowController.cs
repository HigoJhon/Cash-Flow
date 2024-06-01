using back_end.Models;
using back_end.Repository;
using Microsoft.AspNetCore.Mvc;
using System;

namespace back_end.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CashFlowController : ControllerBase
    {
        private readonly ICashFlowRepository _cashFlowRepository;

        public CashFlowController(ICashFlowRepository cashFlowRepository)
        {
            _cashFlowRepository = cashFlowRepository;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                CashFlowResponseDto cashFlow = _cashFlowRepository.GetCashFlow(id);
                if (cashFlow == null)
                {
                    return NotFound(new { message = "Cash flow not found." });
                }
                return Ok(cashFlow);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] CashFlow cashFlow)
        {
            try
            {
                CashFlow newCashFlow = _cashFlowRepository.AddCashFlow(cashFlow);
                return Ok(newCashFlow);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                CashFlow cashFlow = _cashFlowRepository.DeleteAllCashFlow(id);
                return Ok(cashFlow);
            }
            catch (ArgumentException ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }
    }
}
