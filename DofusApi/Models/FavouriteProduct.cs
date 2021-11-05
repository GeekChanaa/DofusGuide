namespace DofusApi.Models
{
    public class FavouriteProduct
    {
        public int ID { get; set; }
        
        public int ProductID { get; set; }
        
        public int UserID { get; set; }
        
        public User User { get; set; }
        
        public Product Product { get; set; }
        
    }
}