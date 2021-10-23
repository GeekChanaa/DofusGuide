using DofusApi.Models;
using DofusApi.Helpers;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace DofusApi.Data
{
    public class BaseRepository<M> : IBaseRepository<M> where M : class
    {
        private readonly DofusDataContext _context;

        private readonly DbSet<M> dbSet;

        public BaseRepository(DofusDataContext context)
        {
            _context = context;
            this.dbSet = _context.Set<M>();
        }

        // Getting PagedList of Cities
        public async Task<PagedList<M>> Get(GlobalParams objectParams)
        {
            var cities = this.dbSet.AsQueryable();

            // Sorting Cities
            if (!string.IsNullOrEmpty(objectParams.OrderBy))
            {
                switch (objectParams.OrderBy)
                {
                    case "name":
                        //cities = objectParams.ReverseOrder == "y" ? cities.OrderByDescending(c => c.Name) : cities.OrderBy(c => c.Name);
                        break;
                    default:
                        //cities = cities.OrderByDescending(c => c.ID);
                        break;
                }
            }

            // Filtering Cities 
            if (!string.IsNullOrEmpty(objectParams.SearchBy))
            {
                switch (objectParams.SearchBy)
                {
                    case "name":
                        //cities = cities.Where(c => EF.Functions.Like(c.Name, "%"+objectParams.SearchValue+"%"));
                        break;
                    default :
                        break;
                }
            }

            return await PagedList<M>.CreateAsync(cities, objectParams.PageNumber, objectParams.PageSize);
        }
    }

    
}