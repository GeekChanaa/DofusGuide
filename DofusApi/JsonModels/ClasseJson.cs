using System.Collections.Generic;

namespace DofusApi.JsonModels
{
    public class ClasseJson
    {
        public int AnkamaID { get; set; }
        public int ID { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public string MaleImg { get; set; }
        public string FemaleImg { get; set; }
        public virtual ICollection<string> Roles { get; set; }
        public virtual ICollection<SpellJson> Spells { get; set;}
    }
}