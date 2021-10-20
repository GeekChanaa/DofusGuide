namespace DofusApi.Models
{
    public class StatisticMount
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int? Min { get; set; }
        public int? Max { get; set; }
        public int MountID { get; set; }
    }
}