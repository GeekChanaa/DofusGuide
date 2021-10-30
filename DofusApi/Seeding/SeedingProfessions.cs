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

            List<Profession> professionsj = JsonConvert.DeserializeObject<List<Profession>>(json10);
            context.Profession.AddRange(professionsj);
            context.SaveChanges();

            ///// Populating Professions
            
            r10.Close();
        }
    }
}