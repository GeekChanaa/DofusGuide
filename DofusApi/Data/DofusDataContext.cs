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
        public DbSet<DofusApi.Models.MonsterArea> MonsterArea { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.WeaponChar> WeaponChar { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Classe> Classe { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Consumable> Consumable { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.Decor> Decor { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.MonsterDrop> MonsterDrop { get; set; }
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
        public DbSet<DofusApi.Models.ConsumableRecipe> ConsumableRecipe { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.HarnessRecipe> HarnessRecipe { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.IdolRecipe> IdolRecipe { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.EquipmentRecipe> EquipmentRecipe { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.ResourceRecipe> ResourceRecipe { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.WeaponRecipe> WeaponRecipe { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.MonsterResistence> MonsterResistence { get; set; }
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
        public DbSet<DofusApi.Models.EquipmentStatistic> EquipmentStatistic { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.ConsumableStatistic> ConsumableStatistic { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.IdolStatistic> IdolStatistic { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.MonsterStatistic> MonsterStatistic { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.MountStatistic> MountStatistic { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.PetStatistic> PetStatistic { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.SetStatistic> SetStatistic { get; set; }
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DbSet<DofusApi.Models.WeaponStatistic> StatisticWeapon { get; set; } 
        public DbSet<DofusApi.Models.Ground> Ground { get; set; }
        public DbSet<DofusApi.Models.DropPercent> DropPercent { get; set; }
        public DbSet<DofusApi.Models.Product> Product { get; set; }
        public DbSet<DofusApi.Models.ProductComment> ProductComment { get; set; }
        public DbSet<DofusApi.Models.ProductStatistic> ProductStatistic { get; set; }
        public DbSet<DofusApi.Models.ForumReportComment> ForumReportComment { get; set; }
        public DbSet<DofusApi.Models.ForumReportReply> ForumReportReply { get; set; }
        public DbSet<DofusApi.Models.Follower> Follower { get; set; }

    }
}