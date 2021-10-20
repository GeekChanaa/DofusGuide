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
    public static class SeedingSets
    {
        public static void Seed(DofusDataContext context)
        {

            string RootPath = AppDomain.CurrentDomain.BaseDirectory.Replace("bin/Debug/net5.0/","/JsonData/");
            
            StreamReader r12 = new StreamReader(RootPath+"sets.json");
            string json12 = r12.ReadToEnd();

            List<SetJson> setsj = JsonConvert.DeserializeObject<List<SetJson>>(json12);

            foreach (var setj in setsj)
            {
                var set = new Set
                {
                    AnkamaID = setj.AnkamaID,
                    Name = setj.Name,
                    Level = setj.Level,
                    Type = setj.Type,
                    Url = setj.Url,
                    ImgUrl = setj.ImgUrl,
                    EquipmentID = setj.Equipment_id,
                    WeaponID = setj.Weapon_id,
                    Number = setj.Bonus.Number,
                };
                context.Set.Add(set);
                context.SaveChanges();
                Console.WriteLine("Sets");

                if (setj.Bonus.Stats != null)
                    foreach (var statisticSetj in setj.Bonus.Stats)
                    {
                        var statisticSet = new StatisticSet
                        {
                            Name = statisticSetj.Name,
                            Min = statisticSetj.Min,
                            Max = statisticSetj.Max,
                            SetID = set.ID,
                        };
                        context.StatisticSet.Add(statisticSet);
                        context.SaveChanges();
                        Console.WriteLine("StatisticSets");
                    }
            }
        }
    }
}