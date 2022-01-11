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
    public static class SeedingMounts
    {
        public static void Seed(DofusDataContext context)
        {
            StreamReader r8 = new StreamReader(System.IO.Directory.GetCurrentDirectory()+"/JsonData/mounts.json");
            string json8 = r8.ReadToEnd();

            Console.WriteLine(" =========== Populating Mounts ========= ");
            List<Mount> mountsj = JsonConvert.DeserializeObject<List<Mount>>(json8);
            context.Mount.AddRange(mountsj);
            context.SaveChanges();
            // foreach (var mountj in mountsj)
            // {
            //     var mount = new Mount
            //     {
            //         AnkamaID = mountj.AnkamaID,
            //         Name = mountj.Name,
            //         Type = mountj.Type,
            //         Level = mountj.Level,
            //         ImgUrl = mountj.ImgUrl,
            //         Url = mountj.Url,
            //     };
            //     context.Mount.Add(mount);

            //     Console.WriteLine("Mounts");
            //     context.SaveChanges();

            //     // Populating Mount Statistics
            //     if (mountj.Statistics != null)
            //         foreach (var statisticMountj in mountj.Statistics)
            //         {
            //             var statisticMount = new StatisticMount
            //             {
            //                 Name = statisticMountj.Name,
            //                 Min = statisticMountj.Min,
            //                 Max = statisticMountj.Max,
            //                 MountID = mount.ID,
            //             };
            //             context.StatisticMount.Add(statisticMount);

            //             Console.WriteLine("StatisticMounts");
            //             context.SaveChanges();

            //         }
            // }

            r8.Close();
        }
    }
}