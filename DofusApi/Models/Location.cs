namespace DofusApi.Models
{
    public class Location
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int ProfessionID { get; set; }
        public Profession Profession { get; set; }
        
        
    }
}