using System.Collections.Generic;

namespace DofusApi.JsonModels
{   
    public class MonsterJson
    {
        public int ID { get; set; }
        public int AnkamaID { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public int Level { get; set; }
        public string ImgUrl { get; set; }
        public string Url { get; set; }
        public virtual List<ResistenceMonsterJson> Resistances { get; set; }
        public virtual List<StatisticMonsterJson> Statistics { get; set; }
        public virtual List<string> Areas { get; set; }
        public virtual List<DropMonsterJson> Drops { get; set; }

    }
}