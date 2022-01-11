
namespace DofusApi.Models
{
    public class DropPercent
    {
        public int ID { get; set; }
        
        public double? Max { get; set; }
        
        public double Min { get; set; }
        
        public MonsterDrop MonsterDrop { get; set; }
        
        public int MonsterDropID { get; set; }
        
        
    }
}