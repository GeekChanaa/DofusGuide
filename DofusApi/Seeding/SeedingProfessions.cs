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
            StreamReader r10 = new StreamReader(System.IO.Directory.GetCurrentDirectory()+"/JsonData/professions.json");
            string json10 = r10.ReadToEnd();

            List<Profession> professionsj = JsonConvert.DeserializeObject<List<Profession>>(json10);
            context.Profession.AddRange(professionsj);
            context.SaveChanges();

            ///// Populating Professions
            
            r10.Close();
        }
    }
}