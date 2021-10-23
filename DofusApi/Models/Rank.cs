using System.Collections.Generic;

namespace DofusApi.Models
{
    public class Rank
    {
        public int ID { get; set; }
        
        public string Name { get; set; }
        
        public ICollection<RolePrivilege> RolePrivileges { get; set; }
        
        
    }
}