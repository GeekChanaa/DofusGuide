using System;

namespace DofusApi.Models
{
    public class ForumLike
    {
        public int ID { get; set; }
        public int ForumPostID { get; set; }
        public ForumPost ForumPost { get; set; }
        public DateTime CreatedAt { get; set; }

        public int? UserID { get; set; }
        public User User { get; set; }
    }
}