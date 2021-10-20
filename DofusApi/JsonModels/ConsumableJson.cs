using System.Collections.Generic;
namespace DofusApi.JsonModels
{
    public class ConsumableJson
    {
        public int ID { get; set; }
        public int AnkamaID { get; set; }
        public string Name { get; set; }
        public int Level { get; set; }
        public string Type { get; set; }
        public string ImgUrl { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public virtual List<RecipeConsumableJson> Recipe { get; set; }
        public virtual List<StatisticConsumableJson> Statistics { get; set; }

    }
}