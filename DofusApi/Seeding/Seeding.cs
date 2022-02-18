using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using DofusApi.Data;
using System;
using System.Linq;
using System.Web;
using System.Text;
using System.IO;
using Newtonsoft.Json;
using DofusApi.JsonModels;
using DofusApi.Models;
using System.Collections.Generic;
using System.Globalization;

namespace DofusApi.Seeding
{
    public static class SeedingData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            
            Console.WriteLine(AppDomain.CurrentDomain.BaseDirectory);
            using (var context = new DofusDataContext(serviceProvider.GetRequiredService<DbContextOptions<DofusDataContext>>()))
            {
                // Seeding data
                if(!context.Classe.Any())
                SeedingClasses.Seed(context);

                if(!context.Consumable.Any())
                SeedingConsumables.Seed(context);

                if(!context.Equipment.Any())
                SeedingEquipments.Seed(context);
                
                if(!context.Harness.Any())
                SeedingHarnesses.Seed(context);

                if(!context.HavenBag.Any())
                SeedingHavenbags.Seed(context);

                if(!context.Idol.Any())
                SeedingIdols.Seed(context);

                if(!context.Monster.Any())
                SeedingMonsters.Seed(context);

                if(!context.Mount.Any())
                SeedingMounts.Seed(context);

                if(!context.Privilege.Any())
                SeedingPrivileges.Seed(context);

                if(!context.Pet.Any())
                SeedingPets.Seed(context);

                if(!context.Profession.Any())
                SeedingProfessions.Seed(context);

                if(!context.Resource.Any())
                SeedingResources.Seed(context);

                if(!context.Set.Any())
                SeedingSets.Seed(context);

                if(!context.Weapon.Any())
                SeedingWeapons.Seed(context);

                if(!context.Rank.Any())
                SeedingRanks.Seed(context);
            }
        }
    }
}