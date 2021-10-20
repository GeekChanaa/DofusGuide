using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DofusApi.Data;
using DofusApi.Models;

namespace DofusApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DecorsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public DecorsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/Decors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Decor>>> GetDecor()
        {
            return await _context.Decor.ToListAsync();
        }

        // GET: api/Decors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Decor>> GetDecor(int id)
        {
            var decor = await _context.Decor.FindAsync(id);

            if (decor == null)
            {
                return NotFound();
            }

            return decor;
        }

        // PUT: api/Decors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDecor(int id, Decor decor)
        {
            if (id != decor.ID)
            {
                return BadRequest();
            }

            _context.Entry(decor).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DecorExists(id))
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

        // POST: api/Decors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Decor>> PostDecor(Decor decor)
        {
            _context.Decor.Add(decor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDecor", new { id = decor.ID }, decor);
        }

        // DELETE: api/Decors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDecor(int id)
        {
            var decor = await _context.Decor.FindAsync(id);
            if (decor == null)
            {
                return NotFound();
            }

            _context.Decor.Remove(decor);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DecorExists(int id)
        {
            return _context.Decor.Any(e => e.ID == id);
        }
    }
}
