using System;

namespace DofusApi.Models
{
    public class Friendship
    {
        public int ID { get; set; }
        
        public int UserID { get; set; }

        public int FriendID { get; set; }
        
        public User User { get; set; }
        
        public User Friend { get; set; }
        
    }
}