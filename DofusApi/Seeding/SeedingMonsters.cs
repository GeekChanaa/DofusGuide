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
    public static class SeedingMonsters
    {
        public static void Seed(DofusDataContext context)
        {

            ///// Populating Monsters
            StreamReader r7 = new StreamReader(System.IO.Directory.GetCurrentDirectory()+"/JsonData/monsters.json");
            string json7 = r7.ReadToEnd();

            Console.WriteLine(" =========== Populating Monsters ========= ");
            List<Monster> monstersj = JsonConvert.DeserializeObject<List<Monster>>(json7);
            context.Monster.AddRange(monstersj);
            context.SaveChanges();
            
            
            // int i = 0;

            // foreach (var monsterj in monstersj)
            // {
            //     i++;
            //     var monster = new Monster
            //     {
            //         AnkamaID = monsterj.AnkamaID,
            //         Name = monsterj.Name,
            //         Type = monsterj.Type,
            //         Level = monsterj.Level,
            //         ImgUrl = monsterj.ImgUrl,
            //         Url = monsterj.Url,
            //     };
            //     context.Monster.Add(monster);
            //     Console.WriteLine(i);
            //     Console.WriteLine("Monsters");
            //     context.SaveChanges();


            //     // Populating Areas
            //     if (monsterj.Areas != null)
            //     {
            //         foreach (var areaMonsterj in monsterj.Areas)
            //         {
            //             var areaMonster = new AreaMonster
            //             {
            //                 Name = areaMonsterj,
            //                 MonsterID = monster.ID
            //             };
            //             context.AreaMonster.Add(areaMonster);
            //             context.SaveChanges();
            //         }
            //     }


            //     // Populating Drops
            //     if (monsterj.Drops != null)
            //     {
            //         foreach (var dropMonsterj in monsterj.Drops)
            //         {
            //             var dropMonster = new DropMonster
            //             {
            //                 AnkamaID = dropMonsterj.AnkamaID,
            //                 Name = dropMonsterj.Name,
            //                 Url = dropMonsterj.Url,
            //                 ImgUrl = dropMonsterj.ImgUrl,
            //                 DropPercent = dropMonsterj.DropPercent.Max,
            //                 MonsterID = monster.ID,
            //             };
            //             context.DropMonster.Add(dropMonster);

            //             Console.WriteLine("DropMonsters");
            //             context.SaveChanges();

            //         }
            //     }


            //     // Populating Statistics
            //     if (monsterj.Statistics != null)
            //         foreach (var statisticMonsterj in monsterj.Statistics)
            //         {
            //             var statisticMonster = new StatisticMonster
            //             {
            //                 Name = statisticMonsterj.Name,
            //                 Min = statisticMonsterj.Min,
            //                 Max = statisticMonsterj.Max,
            //                 MonsterID = monster.ID,
            //             };
            //             context.StatisticMonster.Add(statisticMonster);

            //             Console.WriteLine("StatisticMonsters");
            //             context.SaveChanges();

            //         }


            //     // Populating Resistences
            //     if (monsterj.Resistances != null)
            //         foreach (var resistenceMonsterj in monsterj.Resistances)
            //         {
            //             Console.Write("okokokok");
            //             var resistenceMonster = new ResistenceMonster
            //             {
            //                 Name = resistenceMonsterj.Name,
            //                 Min = resistenceMonsterj.Min,
            //                 Max = resistenceMonsterj.Max,
            //                 MonsterID = monster.ID,
            //             };
            //             context.ResistenceMonster.Add(resistenceMonster);

            //             Console.WriteLine("ResistenceMonsters");
            //             context.SaveChanges();

            //         }
            // }
            r7.Close();
        }
    }
}