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
    public static class SeedingIdols
    {
        public static void Seed(DofusDataContext context)
        {




            // Populating Idols / 
            string RootPath = AppDomain.CurrentDomain.BaseDirectory.Replace("bin/Debug/net5.0/","/JsonData/");
            StreamReader r6 = new StreamReader(RootPath+"idols.json");
            string json6 = r6.ReadToEnd();

            List<IdolJson> idolsj = JsonConvert.DeserializeObject<List<IdolJson>>(json6);

            foreach (var idolj in idolsj)
            {
                var idol = new Idol
                {
                    AnkamaID = idolj.AnkamaID,
                    Name = idolj.Name,
                    Level = idolj.Level,
                    Type = idolj.Type,
                    ImgUrl = idolj.ImgUrl,
                    Url = idolj.Url,
                    Description = idolj.Description,
                };
                context.Idol.Add(idol);

                Console.WriteLine("Idols");
                context.SaveChanges();


                // Populating StatisticIdol
                foreach (var statisticIdolj in idolj.Statistics)
                {
                    var statisticIdol = new StatisticIdol
                    {
                        Name = statisticIdolj.Name,
                        Power = statisticIdolj.Power,
                        IdolID = idol.ID,
                    };
                    context.StatisticIdol.Add(statisticIdol);

                    Console.WriteLine("StatisticIdols");
                    context.SaveChanges();

                }

                // Populating RecipeIdol
                foreach (var recipeIdolj in idolj.Recipe)
                {
                    var recipeIdol = new RecipeIdol
                    {
                        AnkamaID = recipeIdolj.AnkamaID,
                        Name = recipeIdolj.Name,
                        Url = recipeIdolj.Url,
                        ImgUrl = recipeIdolj.ImgUrl,
                        Quantity = recipeIdolj.Quantity,
                        Level = recipeIdolj.Level,
                        Type = recipeIdolj.Type,
                        IdolID = idol.ID,
                    };
                    context.RecipeIdol.Add(recipeIdol);

                    Console.WriteLine("RecipeIdols");
                    context.SaveChanges();

                }
            }
            r6.Close();
        }
    }
}