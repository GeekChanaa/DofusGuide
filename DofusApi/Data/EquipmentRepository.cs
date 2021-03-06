using DofusApi.Models;
using DofusApi.Helpers;
using System;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace DofusApi.Data
{
    public class EquipmentRepository : BaseRepository<Equipment>
    {
        // Constructor
        public EquipmentRepository(DofusDataContext context) : base(context)
        {

        }

        // Getting Paramscd
        public override IQueryable<Equipment> Get(GlobalParams objectParams)
        {
            var data = base.Get(objectParams);
            return data.Include(u => u.Statistics);
        }

        // Get By ID 
        override public async Task<Equipment> GetByID(int id)
        {
            return await this.dbSet.Include(u => u.Statistics)
                .Include(u => u.Recipes)
                .FirstOrDefaultAsync(u => u.ID == id);
        }
    }
}