namespace DofusApi.Models
{
    public class AreaMonster
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int MonsterID { get; set; }

        public Monster Monster { get; set; }
    }
}