using System;

namespace DofusApi.Dtos
{
    public class UserForUpdateDto
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public int RoleID { get; set; }
        public string Password { get; set; }
    }
}