using System;

namespace DofusApi.Models
{
    public class ForumReportReply
    {
        public int ID { get; set; }
        
        public int ForumReplyID { get; set; }
        
        public int UserID { get; set; }
        
        public User User { get; set; }
        
        public ForumReply ForumReply { get; set; }
        
        
    }
}