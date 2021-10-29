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
    public class BaseController<T> : Controller where T : class
    {
        private readonly DofusDataContext _context;
        private readonly IBaseRepository<T> _repo;
        private readonly DbSet<T> _dbSet;

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
            var classes = await _repo.Get(globalParams);
            Response.AddPagination(classes.CurrentPage, classes.PageSize, classes.TotalCount, classes.TotalPages);
            return Ok(classes); 
        }

        // GET: api/[items]/5
        [HttpGet("{id}")]
        public async Task<ActionResult<T>> Get(int id)
        {
            var item = await _dbSet.FindAsync(id);

            if (item == null)
            {
                return NotFound();
            }

            return item;
        }

        // PUT: api/[items]/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClasse(int id, T item)
        {
            if (id != item.ID)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClasseExists(id))
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
        public async Task<ActionResult<Classe>> PostClasse(Classe classe)
        {
            _context.Classe.Add(classe);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClasse", new { id = classe.ID }, classe);
        }

        // DELETE: api/Classes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClasse(int id)
        {
            var classe = await _context.Classe.FindAsync(id);
            if (classe == null)
            {
                return NotFound();
            }

            _context.Classe.Remove(classe);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClasseExists(int id)
        {
            return _context.Classe.Any(e => e.ID == id);
        }
    }
}