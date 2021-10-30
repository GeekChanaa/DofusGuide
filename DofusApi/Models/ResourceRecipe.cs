namespace DofusApi.Models
{
    public class ResourceRecipe
    {
        public int ID { get; set; }
        public int AnkamaID { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public string ImgUrl { get; set; }
        public int Quantity { get; set; }
        public int Level { get; set; }
        public string Type { get; set; }
        public int ResourceID { get; set; }
    }
}