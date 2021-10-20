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
    public static class SeedingConsumables
    {
        public static void Seed(DofusDataContext context)
        {
            //// Populating Consumables / Consumable Statistics / Consumable Recipes
            string RootPath = AppDomain.CurrentDomain.BaseDirectory.Replace("bin/Debug/net5.0/","/JsonData/");
            StreamReader r2 = new StreamReader(RootPath+"consumables.json");
            string json2 = r2.ReadToEnd();

            List<ConsumableJson> consumablesj = JsonConvert.DeserializeObject<List<ConsumableJson>>(json2);

            //// Seeding Consumables
            foreach (var consumablej in consumablesj)
            {
                var consumable = new Consumable
                {
                    Name = consumablej.Name,
                    Type = consumablej.Type,
                    Level = consumablej.Level,
                    Url = consumablej.Url,
                    ImgUrl = consumablej.ImgUrl,
                    Description = consumablej.Description,
                };
                context.Consumable.Add(consumable);

                Console.WriteLine("Consumables");
                context.SaveChanges();




                //// Seeding Recipes for consumables
                foreach (var recipeConsumablej in consumablej.Recipe)
                {
                    var recipeConsumable = new RecipeConsumable
                    {
                        Name = recipeConsumablej.Name,
                        AnkamaID = recipeConsumablej.AnkamaID,
                        Url = recipeConsumablej.Url,
                        ImgUrl = recipeConsumablej.ImgUrl,
                        Quantity = recipeConsumablej.Quantity,
                        Level = recipeConsumablej.Level,
                        Type = recipeConsumablej.Type,
                        ConsumableID = consumable.ID,
                    };
                    context.RecipeConsumable.Add(recipeConsumable);

                    Console.WriteLine("RecipeConsumables");
                    context.SaveChanges();

                }


                // Seeding Statistics for consumables

                if (consumablej.Statistics != null)
                {
                    foreach (var statisticConsumablej in consumablej.Statistics)
                    {
                        var statisticConsumable = new StatisticConsumable
                        {
                            Name = statisticConsumablej.Name,
                            Min = statisticConsumablej.Min,
                            Max = statisticConsumablej.Max,
                            ConsumableID = consumable.ID,
                        };
                        context.StatisticConsumable.Add(statisticConsumable);

                        Console.WriteLine("StatisticConsumables");
                        context.SaveChanges();

                    }
                }



            }

            r2.Close();
        }
    }
}