using DofusApi.Models;
using DofusApi.Helpers;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Linq.Dynamic.Core;
using System.Linq.Dynamic.Core.CustomTypeProviders;
using System.Reflection;
using System.Runtime.CompilerServices;
using Microsoft.AspNetCore.Mvc;
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

        // Paged List of The object
        public async Task<PagedList<M>> Get(GlobalParams objectParams)
        {
            var data = this.dbSet.AsQueryable();

            // List of parameters of M
            var props = typeof(M).GetProperties();

            // Sorting
            if (!string.IsNullOrEmpty(objectParams.OrderBy))
            {
                foreach(var prop in props) {
                    if(prop.Name == objectParams.OrderBy){
                        data = objectParams.ReverseOrder == "y" ? data.OrderBy(prop.Name+" descending") : data.OrderBy(prop.Name);
                    }
                }
            }

            // Searching for an occurence of a string Only string Objects 
            if (!string.IsNullOrEmpty(objectParams.SearchBy))
            {
                foreach(var prop in props)
                {
                    if(prop.Name == objectParams.SearchBy)
                        {
                            string filterQuery1 = "("+prop.Name+".Contains(\""+objectParams.SearchValue+"\"))";
                            Console.WriteLine(filterQuery1);
                            data = data.Where(filterQuery1);
                        }
                }

                
            }

            // Searching for an exact value
            if (!string.IsNullOrEmpty(objectParams.FilterBy))
            {
                foreach(var prop in props)
                {
                    if(prop.PropertyType == typeof(string))
                    {
                        if(prop.Name == objectParams.FilterBy)
                        {
                            string filterQuery1 = "("+prop.Name+" == \""+objectParams.FilterValue+"\")";
                            Console.WriteLine(filterQuery1);
                            data = data.Where(filterQuery1);
                        }
                    }
                }
            }

            return await PagedList<M>.CreateAsync(data, objectParams.PageNumber, objectParams.PageSize);
        }


        // Getting the object
        public async Task<M> GetByID(int id)
        {
            return await this.dbSet.FindAsync(id);
        }

        // Inserting the object
        public async Task<M> Insert(M entity)
        {
            this.dbSet.Add(entity);
            await this._context.SaveChangesAsync();
            return entity;
        }

        // Deleting the object using id
        public async Task Delete(int id)
        {
            var item = await this.dbSet.FindAsync(id);
            this.dbSet.Remove(item);
            await this._context.SaveChangesAsync();
        }

        // Deleting object
        public async Task Delete(M entity)
        {
            this.dbSet.Remove(entity);
            await this._context.SaveChangesAsync();
        }

        // Updating the object
        public async Task Update(M entity)
        {
            this._context.Entry(entity).State = EntityState.Modified;
            await this._context.SaveChangesAsync();
        }
    }

    
}