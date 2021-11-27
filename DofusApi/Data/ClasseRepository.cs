using DofusApi.Models;
using DofusApi.Helpers;
using System;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace DofusApi.Data
{
    public class ClasseRepository : BaseRepository<Classe>
    {
        // Constructor
        public ClasseRepository(DofusDataContext context) : base(context)
        {

        }

        // Get By ID 
        override public async Task<Classe> GetByID(int id)
        {
            return await this.dbSet.Include(u => u.Spells)
                .Include(u => u.Roles)
                .FirstOrDefaultAsync(u => u.ID == id);
        }
    }
}