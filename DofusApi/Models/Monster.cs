using System.Collections.Generic;

namespace DofusApi.Models
{
    public class Monster
    {
        public int ID { get; set; }
        public int AnkamaID { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public int Level { get; set; }
        public string ImgUrl { get; set; }
        public string Url { get; set; }
        public ICollection<MonsterDrop> MonsterDrops { get; set; }
        public ICollection<MonsterResistence> MonsterResistences { get; set; }
        public ICollection<MonsterArea> MonsterAreas { get; set; }
        public ICollection<MonsterStatistic> MonsterStatistics { get; set; }
        
        
    }
}