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
    public static class SeedingWeapons
    {
        public static void Seed(DofusDataContext context)
        {
            StreamReader r13 = new StreamReader(System.IO.Directory.GetCurrentDirectory()+"/JsonData/weapons.json");
            string json13 = r13.ReadToEnd();
            
            Console.WriteLine("======== Seeding Weapons ===========");

            List<Weapon> weaponsj = JsonConvert.DeserializeObject<List<Weapon>>(json13);
            context.Weapon.AddRange(weaponsj);
            context.SaveChanges();
            // foreach (var weaponj in weaponsj)
            // {
            //     var weapon = new Weapon
            //     {
            //         AnkamaID = weaponj.AnkamaID,
            //         Level = weaponj.Level,
            //         Name = weaponj.Name,
            //         Type = weaponj.Type,
            //         Url = weaponj.Url,
            //         ImgUrl = weaponj.ImgUrl,
            //         Description = weaponj.Description,

            //     };
            //     context.Weapon.Add(weapon);
            //     context.SaveChanges();
            //     Console.WriteLine("Weapons");

            //     if (weaponj.Statistics != null)
            //         foreach (var statisticWeaponj in weaponj.Statistics)
            //         {
            //             var statisticWeapon = new StatisticWeapon
            //             {
            //                 Name = statisticWeaponj.Name,
            //                 Min = statisticWeaponj.Min,
            //                 Max = statisticWeaponj.Max,
            //                 WeaponID = weapon.ID,
            //             };
            //             context.StatisticWeapon.Add(statisticWeapon);
            //             context.SaveChanges();
            //             Console.WriteLine("StatisticWeapons");
            //         }

            //     if (weaponj.Recipe != null)
            //         foreach (var recipeWeaponj in weaponj.Recipe)
            //         {
            //             var recipeWeapon = new RecipeWeapon
            //             {
            //                 AnkamaID = recipeWeaponj.AnkamaID,
            //                 Name = recipeWeaponj.Name,
            //                 Url = recipeWeaponj.Url,
            //                 ImgUrl = recipeWeaponj.ImgUrl,
            //                 Quantity = recipeWeaponj.Quantity,
            //                 Level = recipeWeaponj.Level,
            //                 Type = recipeWeaponj.Type,
            //                 WeaponID = weapon.ID,
            //             };
            //             context.RecipeWeapon.Add(recipeWeapon);
            //             context.SaveChanges();
            //             Console.WriteLine("RecipeWeapons");
            //         }

            //     if (weaponj.Characteristics != null)
            //         foreach (var statisticWeaponj in weaponj.Characteristics)
            //         {
            //             var charWeapon = new CharWeapon
            //             {
            //                 Name = statisticWeaponj.Name,
            //                 Value = statisticWeaponj.Value,
            //                 WeaponID = weapon.ID,

            //             };
            //             context.CharWeapon.Add(charWeapon);
            //             context.SaveChanges();
            //             Console.WriteLine("CharWeapons");
            //         }


            // }
        }
    }
}