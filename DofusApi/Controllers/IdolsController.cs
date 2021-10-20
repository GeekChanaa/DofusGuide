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
    public class IdolsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public IdolsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/Idols
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Idol>>> GetIdol()
        {
            return await _context.Idol.ToListAsync();
        }

        // GET: api/Idols/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Idol>> GetIdol(int id)
        {
            var idol = await _context.Idol.FindAsync(id);

            if (idol == null)
            {
                return NotFound();
            }

            return idol;
        }

        // PUT: api/Idols/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIdol(int id, Idol idol)
        {
            if (id != idol.ID)
            {
                return BadRequest();
            }

            _context.Entry(idol).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IdolExists(id))
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

        // POST: api/Idols
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Idol>> PostIdol(Idol idol)
        {
            _context.Idol.Add(idol);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIdol", new { id = idol.ID }, idol);
        }

        // DELETE: api/Idols/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIdol(int id)
        {
            var idol = await _context.Idol.FindAsync(id);
            if (idol == null)
            {
                return NotFound();
            }

            _context.Idol.Remove(idol);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool IdolExists(int id)
        {
            return _context.Idol.Any(e => e.ID == id);
        }
    }
}
