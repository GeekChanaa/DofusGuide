using System;

namespace DofusApi.Models
{
    public class ForumCategory
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
        public int? UserID { get; set; }
        public User User { get; set; }
    }
}