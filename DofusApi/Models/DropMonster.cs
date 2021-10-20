namespace DofusApi.Models
{
    public class DropMonster
    {
        public int ID { get; set; }
        public int AnkamaID { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public string ImgUrl { get; set; }
        public float? DropPercent { get; set; }
        public int MonsterID { get; set; }
    }
}