using DofusApi.Models;
using DofusApi.Helpers;
using System;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace DofusApi.Data
{
    public class MonsterRepository : BaseRepository<Monster>
    {
        // Constructor
        public MonsterRepository(DofusDataContext context) : base(context)
        {

        }

        // Get By ID 
        override public async Task<Monster> GetByID(int id)
        {
            return await this.dbSet
                .Include(u => u.Statistics)
                .Include(u => u.Areas)
                .Include(u => u.Resistances)
                .Include(u => u.Drops)
                .FirstOrDefaultAsync(u => u.ID == id);
        }
    }
}