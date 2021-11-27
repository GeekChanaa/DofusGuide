
using DofusApi.Models;
using DofusApi.Helpers;
using System;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace DofusApi.Data
{
    public class ProfessionRepository : BaseRepository<Profession>
    {
        // Constructor
        public ProfessionRepository(DofusDataContext context) : base(context)
        {

        }

        // Get By ID 
        override public async Task<Profession> GetByID(int id)
        {
            return await this.dbSet
                .Include(u => u.Locations)
                .Include(u => u.Harvests)
                .FirstOrDefaultAsync(u => u.ID == id);
        }
    }
}