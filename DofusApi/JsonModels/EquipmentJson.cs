using System.Collections.Generic;

namespace DofusApi.JsonModels
{
    public class EquipmentJson
    {
        public int ID { get; set; }
        public int AnkamaID { get; set; }
        public string Name { get; set; }
        public int Level { get; set; }
        public string Type { get; set; }
        public string ImgUrl { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public virtual List<RecipeItemJson> Recipe { get; set; }
        public virtual List<StatisticJson> Statistics { get; set; }

    }
}