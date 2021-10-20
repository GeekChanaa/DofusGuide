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
    public class DropMonstersController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public DropMonstersController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/DropMonsters
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DropMonster>>> GetDropMonster()
        {
            return await _context.DropMonster.ToListAsync();
        }

        // GET: api/DropMonsters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DropMonster>> GetDropMonster(int id)
        {
            var dropMonster = await _context.DropMonster.FindAsync(id);

            if (dropMonster == null)
            {
                return NotFound();
            }

            return dropMonster;
        }

        // PUT: api/DropMonsters/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDropMonster(int id, DropMonster dropMonster)
        {
            if (id != dropMonster.ID)
            {
                return BadRequest();
            }

            _context.Entry(dropMonster).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DropMonsterExists(id))
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

        // POST: api/DropMonsters
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DropMonster>> PostDropMonster(DropMonster dropMonster)
        {
            _context.DropMonster.Add(dropMonster);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDropMonster", new { id = dropMonster.ID }, dropMonster);
        }

        // DELETE: api/DropMonsters/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDropMonster(int id)
        {
            var dropMonster = await _context.DropMonster.FindAsync(id);
            if (dropMonster == null)
            {
                return NotFound();
            }

            _context.DropMonster.Remove(dropMonster);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DropMonsterExists(int id)
        {
            return _context.DropMonster.Any(e => e.ID == id);
        }
    }
}
