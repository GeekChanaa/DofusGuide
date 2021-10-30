namespace DofusApi.Models
{
    public class Role
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int ClasseID { get; set; }
        public Classe Classe { get; set; }
        
        
    }
}