namespace DofusApi.Models
{
    public class Ground
    {
        public int ID { get; set; }
        public string ImgUrl { get; set; }
        public int HavenBagID { get; set; }
        public HavenBag HavenBag { get; set; }
        
        
    }
}