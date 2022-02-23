using System.Text;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using DofusApi.Hdv.Models;
using System;

namespace DofusApi.Hdv.SyncDataServices.Http
{
    public class HttpCommandDataClient : ICommandDataClient
    {
        private readonly HttpClient _httpClient;

        public HttpCommandDataClient(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }
        public async Task SendEquipmentPriceToCommand(EquipmentPrice eqPrice)
        {
            var httpContent = new StringContent(
                JsonSerializer.Serialize(eqPrice),
                Encoding.UTF8,
                "application/json"
            );

            var response = await _httpClient.PostAsync("http://localhost:5001/api/equipments", httpContent);

            if(response.IsSuccessStatusCode)
            {
                Console.WriteLine("sync post was ok");
            }
        }
    }
}