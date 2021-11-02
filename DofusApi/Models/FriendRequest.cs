using System;

namespace DofusApi.Models
{
    public class FriendRequest
    {
        public int ID { get; set; }
        
        public int SenderID { get; set; }
        
        public int ReceiverID { get; set; }
        
        public User Sender { get; set; }
        
        public User Receiver { get; set; }
        
        
    }
}