using System;
using System.Collections.Generic;

namespace DofusApi.Hdv.Models
{
    public class EquipmentStatistic
    {
        public int ID { get; set; }
        
        public string Name { get; set; }
        
        public int Value { get; set; }
        
        public int EquipmentPriceID { get; set; }
        
        public EquipmentPrice EquipmentPrice { get; set; }
        
    }
}