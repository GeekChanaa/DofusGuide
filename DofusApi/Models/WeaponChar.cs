namespace DofusApi.Models
{
    public class WeaponChar
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }

        public int WeaponID { get; set; }

        public Weapon Weapon { get; set; }
    }
}