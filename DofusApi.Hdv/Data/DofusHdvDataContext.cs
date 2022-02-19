using DofusApi.Hdv.Models;
using Microsoft.EntityFrameworkCore;

namespace DofusApi.Hdv.Data
{
    public class DofusHdvDataContext : DbContext
    {
        // This class instance represents a session with the database and can be used to query and save instances of our entities
        public DofusHdvDataContext(DbContextOptions<DofusHdvDataContext> options) : base(options)
        {

        }

        public DbSet<DofusApi.Hdv.Models.ConsumablePrice> ConsumablePrice { get; set; }
        public DbSet<DofusApi.Hdv.Models.EquipmentPrice> EquipmentPrice { get; set; }
        public DbSet<DofusApi.Hdv.Models.EquipmentStatistic> EquipmentStatistic { get; set; }
        public DbSet<DofusApi.Hdv.Models.PetPrice> PetPrice { get; set; }
        public DbSet<DofusApi.Hdv.Models.PetStatistic> PetStatistic { get; set; }
        public DbSet<DofusApi.Hdv.Models.ResourcePrice> ResourcePrice { get; set; }
        public DbSet<DofusApi.Hdv.Models.RunePrice> RunePrice { get; set; }
        public DbSet<DofusApi.Hdv.Models.WeaponPrice> WeaponPrice { get; set; }
        public DbSet<DofusApi.Hdv.Models.WeaponStatistic> WeaponStatistic { get; set; }

    }
}