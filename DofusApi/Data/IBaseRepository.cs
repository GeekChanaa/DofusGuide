using DofusApi.Helpers;
using System;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using DofusApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace DofusApi.Data
{
    public interface IBaseRepository<T>
    {
        Task<PagedList<T>> Get(GlobalParams itemParams);
        Task<T> GetByID(int id);
        Task<T> Insert(T entity);
        Task Delete(int id);
        Task Delete(T entity);
        Task Update(T entity);
    }
}