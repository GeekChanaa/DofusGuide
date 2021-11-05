namespace DofusApi.Models
{
    public class ProductStatistic
    {
        public int ID { get; set; }
        
        public int ProductID { get; set; }
        
        public double Value { get; set; }
        
        public string Name { get; set; }
        
        public Product Product { get; set; }
    }
}