using System.Collections.Generic;
namespace DofusApi.JsonModels
{
    public class HarvestJson
    {
        public string Name { get; set; }
        public string ImgUrl { get; set; }
        public string Url { get; set; }
        public int AnkamaID { get; set; }
        public int Level { get; set; }

        public virtual List<LocationJson> Location { get; set; }
        
    }
}