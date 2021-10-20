using System;

namespace DofusApi.Models
{
    public class ForumReport
    {
        public int ID { get; set; }
        public int ForumPostID { get; set; }
        public int? UserID { get; set; }
        public DateTime CreatedAt { get; set; }
        public User User { get; set; }
    }
}