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
    public static class SeedingHarnesses
    {
        public static void Seed(DofusDataContext context)
        {



            // Populating Harnesses HarnessRecipes
            string RootPath = AppDomain.CurrentDomain.BaseDirectory.Replace("bin/Debug/net5.0/","/JsonData/");
            StreamReader r4 = new StreamReader(RootPath+"harnesses.json");
            string json4 = r4.ReadToEnd();

            Console.WriteLine("============ Populating Harnesses =========");
            List<Harness> harnessesj = JsonConvert.DeserializeObject<List<Harness>>(json4);
            context.Harness.AddRange(harnessesj);
            context.SaveChanges();

            // foreach (var harnessj in harnessesj)
            // {
            //     var harness = new Harness
            //     {
            //         AnkamaID = harnessj.AnkamaID,
            //         Name = harnessj.Name,
            //         Level = harnessj.Level,
            //         Type = harnessj.Type,
            //         ImgUrl = harnessj.ImgUrl,
            //         Url = harnessj.Url,
            //         Description = harnessj.Description,
            //     };

            //     context.Harness.Add(harness);

            //     Console.WriteLine("Harnesses");
            //     context.SaveChanges();



            //     // Populating HarnessRecipes
            //     foreach (var harnessRecipej in harnessj.Recipe)
            //     {
            //         var recipeHarness = new RecipeHarness
            //         {
            //             AnkamaID = harnessRecipej.AnkamaID,
            //             Name = harnessRecipej.Name,
            //             Url = harnessRecipej.Url,
            //             ImgUrl = harnessRecipej.ImgUrl,
            //             Quantity = harnessRecipej.Quantity,
            //             Level = harnessRecipej.Level,
            //             Type = harnessRecipej.Type,
            //             HarnessID = harness.ID,
            //         };

            //         context.RecipeHarness.Add(recipeHarness);

            //         Console.WriteLine("RecipeHarnesses");
            //         context.SaveChanges();

            //     }
            // }

            r4.Close();
        }
    }
}