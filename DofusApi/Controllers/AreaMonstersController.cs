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
    public class AreaMonstersController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public AreaMonstersController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/AreaMonsters
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AreaMonster>>> GetAreaMonster()
        {
            return await _context.AreaMonster.ToListAsync();
        }

        // GET: api/AreaMonsters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AreaMonster>> GetAreaMonster(int id)
        {
            var areaMonster = await _context.AreaMonster.FindAsync(id);

            if (areaMonster == null)
            {
                return NotFound();
            }

            return areaMonster;
        }

        // PUT: api/AreaMonsters/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAreaMonster(int id, AreaMonster areaMonster)
        {
            if (id != areaMonster.ID)
            {
                return BadRequest();
            }

            _context.Entry(areaMonster).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AreaMonsterExists(id))
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

        // POST: api/AreaMonsters
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AreaMonster>> PostAreaMonster(AreaMonster areaMonster)
        {
            _context.AreaMonster.Add(areaMonster);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAreaMonster", new { id = areaMonster.ID }, areaMonster);
        }

        // DELETE: api/AreaMonsters/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAreaMonster(int id)
        {
            var areaMonster = await _context.AreaMonster.FindAsync(id);
            if (areaMonster == null)
            {
                return NotFound();
            }

            _context.AreaMonster.Remove(areaMonster);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AreaMonsterExists(int id)
        {
            return _context.AreaMonster.Any(e => e.ID == id);
        }
    }
}
