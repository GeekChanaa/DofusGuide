using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using DofusApi.Data;
using System;
using System.Linq;
using System.Text;
using Newtonsoft.Json;
using DofusApi.JsonModels;
using DofusApi.Models;
using System.IO;
using System.Collections.Generic;
using System.Globalization;

namespace DofusApi.Seeding
{
    public static class SeedingProfessions
    {
        public static void Seed(DofusDataContext context)
        {



            string RootPath = AppDomain.CurrentDomain.BaseDirectory.Replace("bin/Debug/net5.0/","/JsonData/");
            StreamReader r10 = new StreamReader(RootPath+"professions.json");
            string json10 = r10.ReadToEnd();

            List<ProfessionJson> professionsj = JsonConvert.DeserializeObject<List<ProfessionJson>>(json10);

            ///// Populating Professions
            foreach (var professionj in professionsj)
            {
                var profession = new Profession
                {
                    AnkamaID = professionj.AnkamaID,
                    Name = professionj.Name,
                    ImgUrl = professionj.ImgUrl,
                    Url = professionj.Url,
                    Description = professionj.Description,
                };
                context.Profession.Add(profession);
                context.SaveChanges();
                Console.WriteLine("Professions");

                // Populating Profession Harvests
                if (professionj.Harvests != null)
                    foreach (var harvestj in professionj.Harvests)
                    {
                        var harvest = new Harvest
                        {
                            Name = harvestj.Name,
                            ImgUrl = harvestj.ImgUrl,
                            Url = harvestj.Url,
                            AnkamaID = harvestj.AnkamaID,
                            Level = harvestj.Level,
                            ProfessionID = profession.ID
                        };
                        context.Harvest.Add(harvest);
                        context.SaveChanges();
                        Console.WriteLine("Harvests");

                        // Populating Harvest Locations
                        if (harvestj.Location != null)
                            foreach (var locationj in harvestj.Location)
                            {
                                var location = new Location
                                {
                                    ProfessionID = profession.ID,
                                    Name = locationj.Name,
                                };
                                context.Location.Add(location);
                                context.SaveChanges();
                                Console.WriteLine("Locations");
                            }
                    }
            }
            r10.Close();
        }
    }
}