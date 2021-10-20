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
    public static class SeedingHavenbags
    {
        public static void Seed(DofusDataContext context)
        {



            // Populating Havenbags Decors / 
            string RootPath = AppDomain.CurrentDomain.BaseDirectory.Replace("bin/Debug/net5.0/","/JsonData/");
            StreamReader r5 = new StreamReader(RootPath+"havenbags.json");
            string json5 = r5.ReadToEnd();

            List<HavenBagJson> havenbagsj = JsonConvert.DeserializeObject<List<HavenBagJson>>(json5);

            foreach (var havenbagj in havenbagsj)
            {
                var havenbag = new HavenBag
                {
                    AnkamaID = havenbagj.AnkamaID,
                    Name = havenbagj.Name,
                    ImgUrl = havenbagj.ImgUrl,
                    Url = havenbagj.Url,
                };
                context.HavenBag.Add(havenbag);

                Console.WriteLine("HavenBags");
                context.SaveChanges();


                // Populating Decors
                foreach (var decorj in havenbagj.Decors)
                {
                    var decor = new Decor
                    {
                        ImgUrl = decorj,
                        HavenBagID = havenbag.ID,
                    };
                    context.Decor.Add(decor);

                    Console.WriteLine("Decors");
                    context.SaveChanges();

                }

                // Populating Ground
                foreach (var groundj in havenbagj.Grounds)
                {
                    var ground = new Ground
                    {
                        ImgUrl = groundj,
                        HavenBagID = havenbag.ID,

                    };
                    context.Ground.Add(ground);

                    Console.WriteLine("Grounds");
                    context.SaveChanges();

                }

                // Populating Furnitures
                foreach (var furniturej in havenbagj.Furnitures)
                {
                    var furniture = new Furniture
                    {
                        HavenBagID = havenbag.ID,
                        ImgUrl = furniturej,
                    };
                    context.Furniture.Add(furniture);

                    Console.WriteLine("Furnitures");
                    context.SaveChanges();

                }
            }
            r5.Close();
        }
    }
}