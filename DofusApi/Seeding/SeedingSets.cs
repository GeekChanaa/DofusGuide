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

            List<Set> setsj = JsonConvert.DeserializeObject<List<Set>>(json12);
            context.Set.AddRange(setsj);
            context.SaveChanges();
            
        }
    }
}