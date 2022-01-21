using System;


namespace DofusApi.Models
{
    public class Follower
    {
        public int ID { get; set; }
        
        public int? UserID { get; set; }
        
        public int FollowID { get; set; }
        
        public User User { get; set; }
        
        public User Follow { get; set; }
        
        
    }
}