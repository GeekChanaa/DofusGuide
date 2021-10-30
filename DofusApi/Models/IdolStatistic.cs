namespace DofusApi.Models
{
    public class IdolStatistic
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Power { get; set; }
        public int IdolID { get; set; }
        public Idol Idol { get; set; }
        
        
    }
}