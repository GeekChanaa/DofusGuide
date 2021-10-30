using System.Collections.Generic;

namespace DofusApi.Models
{
    public class Set
    {
        public int ID { get; set; }
        public int AnkamaID { get; set; }
        public string Name { get; set; }
        public int Level { get; set; }
        public string Type { get; set; }
        public string Url { get; set; }
        public string ImgUrl { get; set; }
        public int Number { get; set; }
        public int EquipmentID { get; set; }
        public int WeaponID { get; set; }
        public ICollection<SetStatistic> SetStatistics { get; set; }
        
        
    }
}