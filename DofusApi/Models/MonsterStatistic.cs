namespace DofusApi.Models
{
    public class MonsterStatistic
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int? Min { get; set; }
        public int? Max { get; set; }
        public int MonsterID { get; set; }
        public Monster Monster { get; set; }
    }
}