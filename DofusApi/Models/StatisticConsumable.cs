namespace DofusApi.Models
{
    public class StatisticConsumable
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Min { get; set; }
        public int? Max { get; set; }
        public int ConsumableID { get; set; }
        public Consumable Consumable { get; set; }
        
        
    }
}