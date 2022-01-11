namespace DofusApi.Models
{
    public class MonsterDrop
    {
        public int ID { get; set; }
        public int AnkamaID { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public string ImgUrl { get; set; }
        public DropPercent DropPercent { get; set; }
        public int MonsterID { get; set; }
        public Monster Monster { get; set; }
        
        
    }
}