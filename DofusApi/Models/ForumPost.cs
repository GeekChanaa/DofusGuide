using System;

namespace DofusApi.Models
{
    public class ForumPost
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime CreatedAt { get; set; }
        public int ForumCategoryID { get; set; }
        public ForumCategory ForumCategory { get; set; }
        public int? UserID { get; set; }
        public User User { get; set; }
    }
}