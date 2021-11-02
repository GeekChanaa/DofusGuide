using System;

namespace DofusApi.Models
{
    public class ForumReportComment
    {
        public int ID { get; set; }
        
        public int UserID { get; set; }
        
        public int ForumCommentID { get; set; }
        
        public User User { get; set; }
        
        public ForumComment ForumComment { get; set; }
        
        
    }
}