using back_end.Models;

namespace back_end.Repository
{
    public interface ICashFlowRepository
    {
        CashFlowResponseDto GetCashFlow(int id);
        CashFlow AddCashFlow(CashFlow cashFlow);
        CashFlow DeleteAllCashFlow(int id);
    }
}
