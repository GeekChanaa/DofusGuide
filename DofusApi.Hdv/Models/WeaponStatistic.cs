using System;
using System.Collections.Generic;

namespace DofusApi.Hdv.Models
{
    public class WeaponStatistic
    {
        public int ID { get; set; }
        
        public string Name { get; set; }
        
        public int Value { get; set; }
        
        public int WeaponPriceID { get; set; }
        
        public WeaponPrice WeaponPrice { get; set; }
        
    }
}