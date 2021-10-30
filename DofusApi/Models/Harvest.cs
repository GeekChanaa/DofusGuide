namespace DofusApi.Models
{
    public class Harvest
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string ImgUrl { get; set; }
        public string Url { get; set; }
        public int AnkamaID { get; set; }
        public int Level { get; set; }
        public int ProfessionID { get; set; }
        public Profession Profession { get; set; }
        
        
    }
}