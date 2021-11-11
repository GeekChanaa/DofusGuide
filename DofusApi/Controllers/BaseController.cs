using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DofusApi.Data;
using DofusApi.Models;
using DofusApi.Helpers;

namespace DofusApi.Controllers
{
    [Route("api/[controller]")]
    public class BaseController<T> : ControllerBase where T : class
    {
        protected readonly DofusDataContext _context;
        protected readonly IBaseRepository<T> _repo;
        protected readonly DbSet<T> _dbSet;

        public BaseController(DofusDataContext context, IBaseRepository<T> repo)
        {
            _context = context;
            _repo = repo;
            _dbSet = _context.Set<T>();
        }

        // GET: api/[items]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<T>>> Get([FromQuery] GlobalParams globalParams)
        {
            var classes = await PagedList<T>.CreateAsync(_repo.Get(globalParams),globalParams.PageNumber,globalParams.PageSize);
            Response.AddPagination(classes.CurrentPage, classes.PageSize, classes.TotalCount, classes.TotalPages);
            return Ok(classes); 
        }

        // GET: api/[items]/5
        [HttpGet("{id}")]
        public async Task<ActionResult<T>> Get(int id)
        {
            var item = await this._repo.GetByID(id);

            if (item == null)
            {
                return NotFound();
            }

            return item;
        }

        // PUT: api/[items]/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, T item)
        {
            // if (id != item.ID)
            // {
            //     return BadRequest();
            // }
            try
            {
                await this._repo.Update(item);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!(await Exists(id)))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Classes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<T>> Post(T item)
        {
            await this._repo.Insert(item);
            return CreatedAtAction("GetClasse", item);
        }

        // DELETE: api/Classes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var item = await _dbSet.FindAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            _dbSet.Remove(item);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private async Task<bool> Exists(int id)
        {
            var item = await this._repo.GetByID(id);
            if(item != null)
            return true;
            return false;
        }
    }
}