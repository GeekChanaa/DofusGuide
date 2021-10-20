namespace DofusApi.Models
{
    public class RolePrivilege
    {
        public int ID { get; set; }
        public int RoleID { get; set; }
        public int PrivilegeID { get; set; }

        public virtual Role Role { get; set; }
        public virtual Privilege Privilege { get; set; }
    }
}