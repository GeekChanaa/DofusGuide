
using DofusApi.Models;
using DofusApi.Helpers;
using System;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace DofusApi.Data
{
    public class PetRepository : BaseRepository<Pet>
    {
        // Constructor
        public PetRepository(DofusDataContext context) : base(context)
        {

        }

        // Get By ID 
        override public async Task<Pet> GetByID(int id)
        {
            return await this.dbSet
                .Include(u => u.Statistics)
                .FirstOrDefaultAsync(u => u.ID == id);
        }
    }
}