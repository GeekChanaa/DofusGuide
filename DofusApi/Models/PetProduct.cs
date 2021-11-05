namespace DofusApi.Models
{
    public class PetProduct
    {
        public int ID { get; set; }
        
        public int PetID { get; set; }
        
        public int ProductID { get; set; }
        
        public Pet Pet { get; set; }
        
        public Product Product { get; set; }
        
        
    }
}