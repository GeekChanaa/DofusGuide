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
        protected readonly DofusDataContext _context;

        protected readonly DbSet<M> dbSet;

        public BaseRepository(DofusDataContext context)
        {
            _context = context;
            this.dbSet = _context.Set<M>();
        }

        // Paged List of The object
        public virtual IQueryable<M> Get(GlobalParams objectParams)
        {
            var data = this.dbSet.AsQueryable();

            // List of parameters of M
            var props = typeof(M).GetProperties();

            // Sorting
            if (!string.IsNullOrEmpty(objectParams.OrderBy))
            {
                foreach(var prop in props) {
                    if(prop.Name.ToLower() == objectParams.OrderBy.ToLower()){
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
                            data = data.Where(filterQuery1);
                        }
                }
            }

            // Filtering
            if (objectParams.FilterBy != null)
            {
                
                string filterQuery1 = "";
                var minlvl = "1";
                var maxlvl = "200";
                foreach(var prop in props)
                {
                    if(prop.PropertyType == typeof(string))
                    {
                        for(int i=0; i<objectParams.FilterBy.Length; i++)
                        {
                            if(prop.Name == objectParams.FilterBy[i] )
                            {
                                Console.WriteLine(objectParams.FilterBy[i]);

                                if(i!=0 && filterQuery1 != "")
                                {
                                    Console.WriteLine(i + " :this is the typooo : "+objectParams.FilterValue[i]);
                                    filterQuery1 = filterQuery1+" "+objectParams.FilterMethod+" "+prop.Name+" == \""+objectParams.FilterValue[i]+"\"";
                                }

                                if(i==0 || filterQuery1 == "")
                                {
                                    Console.WriteLine(i + " : this is the type : "+objectParams.FilterValue[i]);
                                    filterQuery1 = prop.Name+" == \""+objectParams.FilterValue[i]+"\"";
                                }
                                
                                if(i==objectParams.FilterValue.Length-1)
                                {
                                    Console.WriteLine("this is the last query");
                                    Console.WriteLine(objectParams.FilterValue[i]);
                                    Console.WriteLine("( "+filterQuery1+" )");
                                    data = data.Where("( "+filterQuery1+" )");
                                }
                            }
                            else if(objectParams.FilterBy[i].Contains('.'))
                            {
                                var navigation = objectParams.FilterBy[i].Split('.').First();
                                var navigationProp = objectParams.FilterBy[i].Split('.').Last();
                                data = data.Where(navigation+".Any("+navigationProp+" == \""+objectParams.FilterValue[i]+"\")");
                            }
                            if(objectParams.FilterBy[i] == "minLevel")
                            {
                                minlvl = objectParams.FilterValue[i];
                            }
                            if(objectParams.FilterBy[i] == "maxLevel")
                            {
                                maxlvl = objectParams.FilterValue[i];
                            }
                        }
                    }
                    if(prop.Name == "Level")
                    {
                        Console.WriteLine(" Level >= "+minlvl);
                        Console.WriteLine(" Level >= "+maxlvl);

                        data = data.Where(" Level >= "+minlvl);
                        data = data.Where(" Level <= "+maxlvl);
                    }
                }

            }

            return data;
        }


        // Getting the object
        public virtual async Task<M> GetByID(int id)
        {
            return await this.dbSet.FindAsync(id);
        }

        // Inserting the object
        public virtual async Task<M> Insert(M entity)
        {
            this.dbSet.Add(entity);
            await this._context.SaveChangesAsync();
            return entity;
        }

        // Deleting the object using id
        public virtual async Task Delete(int id)
        {
            var item = await this.dbSet.FindAsync(id);
            this.dbSet.Remove(item);
            await this._context.SaveChangesAsync();
        }

        // Deleting object
        public virtual async Task Delete(M entity)
        {
            this.dbSet.Remove(entity);
            await this._context.SaveChangesAsync();
        }

        // Updating the object
        public virtual async Task Update(M entity)
        {
            this._context.Entry(entity).State = EntityState.Modified;
            await this._context.SaveChangesAsync();
        }
    }

    
}