namespace DofusApi.Models
{
    public class Statistic
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int? Min { get; set; }
        public int? Max { get; set; }
        public int EquipmentID { get; set; }
    }
}