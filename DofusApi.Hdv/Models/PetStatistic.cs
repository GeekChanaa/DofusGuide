using System;
using System.Collections.Generic;

namespace DofusApi.Hdv.Models
{
    public class PetStatistic
    {
        public int ID { get; set; }
        
        public string Name { get; set; }
        
        public int Value { get; set; }
        
        public int PetPriceID { get; set; }
        
        public PetPrice PetPrice { get; set; }
        
    }
}