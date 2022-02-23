using System.Threading.Tasks;
using DofusApi.Hdv.Models;
namespace DofusApi.Hdv.SyncDataServices.Http
{
    public interface ICommandDataClient
    {
        Task SendEquipmentPriceToCommand(EquipmentPrice eqPrice);
    }
}