using System;

namespace DofusApi.Models
{
    public class ForumReply
    {
        public int ID { get; set; }
        public string Content { get; set; }
        public int ForumCommentID { get; set; }
        public ForumComment ForumComment { get; set; }
        public DateTime CreatedAt { get; set; }

        public int? UserID { get; set; }
        public User User { get; set; }
    }
}