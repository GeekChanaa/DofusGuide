namespace DofusApi.Models
{
    public class ProductComment
    {
        public int ID { get; set; }
        
        public int ProductID { get; set; }
        
        public int? UserID { get; set; }
        
        public string Content { get; set; }
        
        public Product Product { get; set; }
        
        public User User { get; set; }
        
        
    }
}