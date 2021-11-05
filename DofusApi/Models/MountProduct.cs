namespace DofusApi.Models
{
    public class MountProduct
    {
        public int ID { get; set; }
        
        public int MountID { get; set; }
        
        public int ProductID { get; set; }
        
        public Mount Mount { get; set; }
        
        public Product Product { get; set; }
        
        
    }
}