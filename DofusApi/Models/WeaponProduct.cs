namespace DofusApi.Models
{
    public class WeaponProduct
    {
        public int ID { get; set; }
        
        public int WeaponID { get; set; }
        
        public int ProductID { get; set; }
        
        public Product Product { get; set; }
        
        public Weapon Weapon { get; set; }
        
        
    }
}