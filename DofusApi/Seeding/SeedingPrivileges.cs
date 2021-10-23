using DofusApi.Models;
using DofusApi.Data;
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
namespace DofusApi.Seeding
{
    public static class SeedingPrivileges
    {
        public static void Seed(DofusDataContext context)
        {
            context.Privilege.Add(new Privilege { Name = "Admin" });
            context.Privilege.Add(new Privilege { Name = "Guest" });
            context.SaveChanges();
        }
    }
}