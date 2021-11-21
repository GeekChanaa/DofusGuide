using DofusApi.Models;
using DofusApi.Helpers;
using System;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace DofusApi.Data
{
    public class WeaponRepository : BaseRepository<Weapon>
    {
        // Constructor
        public WeaponRepository(DofusDataContext context) : base(context)
        {

        }

        // Getting Paramscd
        public override IQueryable<Weapon> Get(GlobalParams objectParams)
        {
            var data = base.Get(objectParams);
            return data.Include(u => u.Statistics);
        }

        // Get By ID 
        override public async Task<Weapon> GetByID(int id)
        {
            return await this.dbSet.Include(u => u.Statistics)
                .Include(u => u.Recipes)
                .Include(u => u.Chars)
                .FirstOrDefaultAsync(u => u.ID == id);
        }
    }
}