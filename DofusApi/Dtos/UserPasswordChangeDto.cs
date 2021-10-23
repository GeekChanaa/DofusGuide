using System;

namespace DofusApi.Dtos
{
    public class UserPasswordChangeDto
    {
        public int ID { get; set; }
        public string CurrentPassword { get; set; }
        public string NewPassword { get; set; }
        public string NewPasswordCheck { get; set; }
    }
}