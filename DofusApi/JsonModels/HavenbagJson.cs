using System.Collections.Generic;

namespace DofusApi.JsonModels
{
    public class HavenBagJson
    {
        public int ID { get; set; }
        public int AnkamaID { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public string ImgUrl { get; set; }
        public virtual List<string> Decors { get; set; }
        public virtual List<string> Grounds { get; set; }
        public virtual List<string> Furnitures { get; set; }

    }
}