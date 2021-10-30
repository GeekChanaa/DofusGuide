using System.Collections.Generic;

namespace DofusApi.Models
{
    public class HavenBag
    {
        public int ID { get; set; }
        public int AnkamaID { get; set; }
        public string Name { get; set; }
        public string ImgUrl { get; set; }
        public string Url { get; set; }
        public ICollection<Furniture> Furnitures  { get; set; }
        public ICollection<Ground> Grounds  { get; set; }
        public ICollection<Decor> Decors  { get; set; }
        
        
    }
}