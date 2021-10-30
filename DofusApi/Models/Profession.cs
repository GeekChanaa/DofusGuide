using System.Collections.Generic;

namespace DofusApi.Models
{
    public class Profession
    {
        public int ID { get; set; }
        public int AnkamaID { get; set; }
        public string Name { get; set; }
        public string ImgUrl { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public ICollection<Location> Locations { get; set; }
        public ICollection<Harvest> Harvests { get; set; }
        
        
        
        
    }
}