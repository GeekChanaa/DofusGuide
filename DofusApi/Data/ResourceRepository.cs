using DofusApi.Models;
using DofusApi.Helpers;
using System;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace DofusApi.Data
{
    public class ResourceRepository : BaseRepository<Resource>
    {
        // Constructor
        public ResourceRepository(DofusDataContext context) : base(context)
        {

        }

        // Get By ID 
        override public async Task<Resource> GetByID(int id)
        {
            return await this.dbSet
                .Include(u => u.Recipes)
                .FirstOrDefaultAsync(u => u.ID == id);
        }
    }
}