namespace DofusApi.Models
{
    public class MountStatistic
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int? Min { get; set; }
        public int? Max { get; set; }
        public int MountID { get; set; }
        public Mount Mount { get; set; }
        
        
    }
}