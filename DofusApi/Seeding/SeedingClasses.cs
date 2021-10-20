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
    public static class SeedingClasses
    {
        public static void Seed(DofusDataContext context)
        {
            string RootPath = AppDomain.CurrentDomain.BaseDirectory.Replace("bin/Debug/net5.0/","/JsonData/");
            //Preparing file to read
            StreamReader r1 = new StreamReader(RootPath+"classes.json");
            string json1 = r1.ReadToEnd();

            // Json Classes / Roles / spell list
            List<ClasseJson> classesj = JsonConvert.DeserializeObject<List<ClasseJson>>(json1);



            foreach (var classej in classesj)
            {
                // Creating Classe
                var classe = new Classe
                {
                    AnkamaID = classej.AnkamaID,
                    Name = classej.Name,
                    Url = classej.Url,
                    Description = classej.Description,
                    MaleImg = classej.MaleImg,
                    FemaleImg = classej.FemaleImg,
                };
                context.Classe.Add(classe);

                Console.WriteLine("Classes");
                context.SaveChanges();




                // Creating Roles for this classe
                ICollection<String> rolesj = classej.Roles;
                foreach (var rolej in rolesj)
                {
                    var role = new Role
                    {
                        Name = rolej,
                        ClasseID = classe.ID,
                    };
                    context.Role.Add(role);

                    Console.WriteLine("Roles");
                    context.SaveChanges();
                }

                // Creating Spells for this classe
                ICollection<SpellJson> spellsj = classej.Spells;
                foreach (var spellj in spellsj)
                {
                    var spell = new Spell
                    {
                        ClasseID = classe.ID,
                        Name = spellj.Name,
                        Variant = spellj.Variant
                    };
                    context.Spell.Add(spell);

                    Console.WriteLine("Spells");
                    context.SaveChanges();
                }


            }

            r1.Close();
        }
    }
}