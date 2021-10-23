using DofusApi.Helpers;
using System;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using DofusApi.Models;

namespace DofusApi.Data
{
    public interface IBaseRepository<T>
    {
        Task<PagedList<T>> Get(GlobalParams itemParams);
    }
}