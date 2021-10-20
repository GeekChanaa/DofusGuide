using DofusApi.Models;
using Microsoft.EntityFrameworkCore;

namespace DofusApi.Data
{
    public class DofusDataContext : DbContext
    {
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DofusDataContext(DbContextOptions<DofusDataContext> options) : base(options)
        {

        }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.AreaMonster> AreaMonster { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.CharWeapon> CharWeapon { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Classe> Classe { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Consumable> Consumable { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Decor> Decor { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.DropMonster> DropMonster { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Equipment> Equipment { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.ForumCategory> ForumCategory { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.ForumComment> ForumComment { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.ForumLike> ForumLike { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.ForumReport> ForumReport { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Furniture> Furniture { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Harvest> Harvest { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.HavenBag> HavenBag { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Idol> Idol { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Location> Location { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Privilege> Privilege { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Profession> Profession { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.RecipeConsumable> RecipeConsumable { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.RecipeHarness> RecipeHarness { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.RecipeIdol> RecipeIdol { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.RecipeItem> RecipeItem { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.RecipeResource> RecipeResource { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.RecipeWeapon> RecipeWeapon { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.ResistenceMonster> ResistenceMonster { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Resource> Resource { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Role> Role { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Set> Set { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Spell> Spell { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.User> User { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.RolePrivilege> RolePrivilege { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Weapon> Weapon { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Mount> Mount { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Monster> Monster { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Pet> Pet { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Harness> Harness { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Statistic> Statistic { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.StatisticConsumable> StatisticConsumable { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.StatisticIdol> StatisticIdol { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.StatisticMonster> StatisticMonster { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.StatisticMount> StatisticMount { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.StatisticPet> StatisticPet { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.StatisticSet> StatisticSet { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.StatisticWeapon> StatisticWeapon { get; set; } 
        public DbSet<DofusApi.Models.Ground> Ground { get; set; }

    }
}