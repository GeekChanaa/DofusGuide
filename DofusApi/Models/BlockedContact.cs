using System;

namespace DofusApi.Models
{
    public class BlockedContact
    {
        public int ID { get; set; }
        
        public int UserID { get; set; }
        
        public int BlockedID { get; set; }
        
        public User User { get; set; }
        
        public User Blocked { get; set; }
        
    }
}