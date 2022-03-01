using System;
using DofusApi.Hdv.Data;
using Microsoft.EntityFrameworkCore;

namespace DofusApi.Hdv.Seeding
{
    public static class DbMigration
    {
        public static void Seed(DofusHdvDataContext context)
        {
            try
            {
                context.Database.Migrate();
            }
            catch(Exception ex)
            {
                Console.WriteLine("could not run migrations");
            }
        }
    }
}