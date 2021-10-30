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
    public static class SeedingPets
    {
        public static void Seed(DofusDataContext context)
        {



            string RootPath = AppDomain.CurrentDomain.BaseDirectory.Replace("bin/Debug/net5.0/","/JsonData/");
            StreamReader r9 = new StreamReader(RootPath+"pets.json");
            string json9 = r9.ReadToEnd();

            Console.WriteLine(" =========== Populating Pets ========= ");
            List<Pet> petsj = JsonConvert.DeserializeObject<List<Pet>>(json9);
            context.Pet.AddRange(petsj);
            context.SaveChanges();

            ///// Populating Pets
            // foreach (var petj in petsj)
            // {
            //     var pet = new Pet
            //     {
            //         AnkamaID = petj.AnkamaID,
            //         Name = petj.Name,
            //         Level = petj.Level,
            //         Type = petj.Type,
            //         ImgUrl = petj.ImgUrl,
            //         Url = petj.Url,
            //         Description = petj.Description,
            //     };
            //     context.Pet.Add(pet);
            //     context.SaveChanges();
            //     Console.WriteLine("Pets");

            //     // Populating Pets Statistics
            //     if (petj.Statistics != null)
            //         foreach (var statisticPetj in petj.Statistics)
            //         {
            //             var statisticPet = new StatisticPet
            //             {
            //                 Name = statisticPetj.Name,
            //                 Min = statisticPetj.Min,
            //                 Max = statisticPetj.Max,
            //                 PetID = pet.ID,
            //             };
            //             context.StatisticPet.Add(statisticPet);
            //             context.SaveChanges();
            //             Console.WriteLine("StatisticPets");
            //         };


            // }
        }
    }
}