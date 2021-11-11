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

        public override IQueryable<Equipment> Get(GlobalParams objectParams)
        {
            var data = base.Get(objectParams);
            return data.Include(u => u.EquipmentStatistics);
        }
    }
}