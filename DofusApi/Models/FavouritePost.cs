using System;
using System.Collections.Generic;

namespace DofusApi.Models
{
    public class FavouritePost
    {
        public int ID { get; set; }
        
        public int ForumPostID { get; set; }
        
        public int UserID { get; set; }
        
        public User User { get; set; }
        
        public ForumPost ForumPost { get; set; }
        
        
    }
}