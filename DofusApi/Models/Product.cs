using System;

namespace DofusApi.Models
{
    public class Product
    {
        public int ID { get; set; }
        
        public double Price { get; set; }
        
        public bool BetOn { get; set; }
        
        public string Description { get; set; }
        
        public int UserID { get; set; }
        
        public string Status { get; set; }
        
        public int Quantity { get; set; }
        
        public User User { get; set; }
        
        
    }
}