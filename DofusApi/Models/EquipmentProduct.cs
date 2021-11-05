namespace DofusApi.Models
{
    public class EquipmentProduct
    {
        public int ID { get; set; }
        
        public int EquipmentID { get; set; }
        
        public int ProductId { get; set; }
        
        public Equipment Equipment { get; set; }
        
        public Product Product { get; set; }
        
        
    }
}