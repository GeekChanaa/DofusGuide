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
    public static class SeedingResources
    {
        public static void Seed(DofusDataContext context)
        {



            string RootPath = AppDomain.CurrentDomain.BaseDirectory.Replace("bin/Debug/net5.0/","/JsonData/");
            StreamReader r11 = new StreamReader(RootPath+"resources.json");
            string json11 = r11.ReadToEnd();

            Console.WriteLine(" =========== Populating Resources ========= ");
            List<Resource> resourcesj = JsonConvert.DeserializeObject<List<Resource>>(json11);
            context.Resource.AddRange(resourcesj);
            context.SaveChanges();

            // foreach (var resourcej in resourcesj)
            // {
            //     var resource = new Resource
            //     {
            //         AnkamaID = resourcej.AnkamaID,
            //         Name = resourcej.Name,
            //         Level = resourcej.Level,
            //         Type = resourcej.Type,
            //         Url = resourcej.Url,
            //         ImgUrl = resourcej.ImgUrl,
            //         Description = resourcej.Description,
            //     };
            //     context.Resource.Add(resource);
            //     context.SaveChanges();
            //     Console.WriteLine("Resources");
            //     if (resourcej.Recipe != null)
            //         foreach (var resourceRecipej in resourcej.Recipe)
            //         {
            //             var recipeResource = new RecipeResource
            //             {
            //                 AnkamaID = resourceRecipej.AnkamaID,
            //                 Name = resourceRecipej.Name,
            //                 Url = resourceRecipej.Url,
            //                 ImgUrl = resourceRecipej.ImgUrl,
            //                 Quantity = resourceRecipej.Quantity,
            //                 Level = resourceRecipej.Level,
            //                 Type = resourceRecipej.Type,
            //                 ResourceID = resource.ID,
            //             };
            //             context.RecipeResource.Add(recipeResource);
            //             context.SaveChanges();
            //             Console.WriteLine("RecipeResources");
            //         }
            // }

            r11.Close();
        }
    }
}