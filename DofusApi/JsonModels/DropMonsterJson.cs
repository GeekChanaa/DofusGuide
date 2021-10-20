namespace DofusApi.JsonModels
{
    public class DropMonsterJson
    {
        public int AnkamaID { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public string ImgUrl { get; set; }
        public DropPercentJson DropPercent { get; set; }
    }
}