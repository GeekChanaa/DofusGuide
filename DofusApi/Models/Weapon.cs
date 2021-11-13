using System.Collections.Generic;

namespace DofusApi.Models
{
    public class Weapon
    {
        public int ID { get; set; }
        public int AnkamaID { get; set; }
        public int Level { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Url { get; set; }
        public string ImgUrl { get; set; }
        public string Description { get; set; }
        public ICollection<WeaponChar> Chars { get; set; }
        public ICollection<WeaponStatistic> Statistics { get; set; }
        public ICollection<WeaponRecipe> Recipes { get; set; }
        
        
        
        
    }
}