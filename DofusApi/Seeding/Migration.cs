using System;
using DofusApi.Data;
using Microsoft.EntityFrameworkCore;

namespace DofusApi.Seeding
{
    public static class Migration
    {
        public static void Seed(DofusDataContext context)
        {
            try
            {
                Console.WriteLine("MIGRATIIING ") ;
                context.Database.Migrate();
            }
            catch(Exception ex)
            {
                Console.WriteLine("could not run migrations");
            }
        }
    }
}