using System.Collections.Generic;

namespace DofusApi.Models
{
    public class Mount
    {
        public int ID { get; set; }
        public int AnkamaID { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public int Level { get; set; }
        public string ImgUrl { get; set; }
        public string Url { get; set; }
        public ICollection<MountStatistic> Statistics { get; set; }
    }
}