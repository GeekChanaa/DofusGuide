using System.Collections.Generic;

namespace DofusApi.JsonModels
{
    public class SetJson
    {
        public int ID { get; set; }
        public int AnkamaID { get; set; }
        public string Name { get; set; }
        public int Level { get; set; }
        public string Type { get; set; }
        public string Url { get; set; }
        public string ImgUrl { get; set; }
        public int Equipment_id { get; set; }
        public int Weapon_id { get; set; }
        public virtual BonusJson Bonus { get; set; }

    }
}