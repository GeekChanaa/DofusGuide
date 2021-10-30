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
    public static class SeedingEquipments
    {
        public static void Seed(DofusDataContext context)
        {
            // Populating Equipments / RecipeItems and Statistics
            string RootPath = AppDomain.CurrentDomain.BaseDirectory.Replace("bin/Debug/net5.0/","/JsonData/");
            StreamReader r3 = new StreamReader(RootPath+"equipments.json");
            string json3 = r3.ReadToEnd();
            Console.WriteLine("========== Seeding Equipments ===============");
            List<Equipment> equipmentsj = JsonConvert.DeserializeObject<List<Equipment>>(json3);
            context.Equipment.AddRange(equipmentsj);
            context.SaveChanges();

            // Seeding Equipments
            // foreach (var equipmentj in equipmentsj)
            // {
            //     var equipment = new Equipment
            //     {
            //         AnkamaID = equipmentj.AnkamaID,
            //         Name = equipmentj.Name,
            //         Level = equipmentj.Level,
            //         Type = equipmentj.Type,
            //         ImgUrl = equipmentj.ImgUrl,
            //         Url = equipmentj.Url,
            //         Description = equipmentj.Description,
            //     };
            //     context.Equipment.Add(equipment);

            //     Console.WriteLine("Equipments");
            //     context.SaveChanges();


            //     // Seeding RecipeItems
            //     List<RecipeItemJson> recipeItemsj = equipmentj.Recipe;
            //     foreach (var recipeItemj in recipeItemsj)
            //     {
            //         var recipeItem = new RecipeItem
            //         {
            //             AnkamaID = recipeItemj.AnkamaID,
            //             Name = recipeItemj.Name,
            //             Url = recipeItemj.Url,
            //             ImgUrl = recipeItemj.ImgUrl,
            //             Quantity = recipeItemj.Quantity,
            //             Level = recipeItemj.Level,
            //             Type = recipeItemj.Type,
            //             EquipmentID = equipment.ID,
            //         };
            //         context.RecipeItem.Add(recipeItem);

            //         Console.WriteLine("RecipeItems");
            //         context.SaveChanges();

            //     }

            //     //Seeding Statistics
            //     List<StatisticJson> statisticsj = equipmentj.Statistics;
            //     if (statisticsj != null)
            //     {

            //         foreach (var statisticj in statisticsj)
            //         {

            //             var statistic = new Statistic
            //             {
            //                 Name = statisticj.Name,
            //                 Min = statisticj.Min,
            //                 Max = statisticj.Max,
            //                 EquipmentID = equipment.ID,
            //             };
            //             context.Statistic.Add(statistic);

            //             Console.WriteLine("Statistics");
            //             context.SaveChanges();

            //         }
            //     }

            // }

            r3.Close();
        }
    }
}