using System;
using System.Collections.Generic;

namespace DofusApi.Hdv.Models
{
    public class EquipmentPrice
    {
        public int ID { get; set; }
        
        public string Server { get; set; }
        
        public string Name { get; set; }
        
        public double Price { get; set; }
        
        public DateTime CreatedAt { get; set; }
        public string Status { get; set; }
        
        public IEnumerable<EquipmentStatistic> Statistics { get; set; }
        
        
    }
}