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
    public static class SeedingRanks
    {
        public static void Seed(DofusDataContext context)
        {
            Console.WriteLine("========== Seeding Ranks ===============");
            context.Rank.Add(new Rank{Name="normal"});
            context.SaveChanges();
        }
    }
}