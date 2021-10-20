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
    public class MonstersController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public MonstersController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/Monsters
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Monster>>> GetMonster()
        {
            return await _context.Monster.ToListAsync();
        }

        // GET: api/Monsters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Monster>> GetMonster(int id)
        {
            var monster = await _context.Monster.FindAsync(id);

            if (monster == null)
            {
                return NotFound();
            }

            return monster;
        }

        // PUT: api/Monsters/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMonster(int id, Monster monster)
        {
            if (id != monster.ID)
            {
                return BadRequest();
            }

            _context.Entry(monster).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MonsterExists(id))
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

        // POST: api/Monsters
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Monster>> PostMonster(Monster monster)
        {
            _context.Monster.Add(monster);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMonster", new { id = monster.ID }, monster);
        }

        // DELETE: api/Monsters/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMonster(int id)
        {
            var monster = await _context.Monster.FindAsync(id);
            if (monster == null)
            {
                return NotFound();
            }

            _context.Monster.Remove(monster);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MonsterExists(int id)
        {
            return _context.Monster.Any(e => e.ID == id);
        }
    }
}
