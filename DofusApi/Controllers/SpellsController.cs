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
    public class SpellsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public SpellsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/Spells
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Spell>>> GetSpell()
        {
            return await _context.Spell.ToListAsync();
        }

        // GET: api/Spells/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Spell>> GetSpell(int id)
        {
            var spell = await _context.Spell.FindAsync(id);

            if (spell == null)
            {
                return NotFound();
            }

            return spell;
        }

        // PUT: api/Spells/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSpell(int id, Spell spell)
        {
            if (id != spell.ID)
            {
                return BadRequest();
            }

            _context.Entry(spell).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SpellExists(id))
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

        // POST: api/Spells
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Spell>> PostSpell(Spell spell)
        {
            _context.Spell.Add(spell);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSpell", new { id = spell.ID }, spell);
        }

        // DELETE: api/Spells/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSpell(int id)
        {
            var spell = await _context.Spell.FindAsync(id);
            if (spell == null)
            {
                return NotFound();
            }

            _context.Spell.Remove(spell);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SpellExists(int id)
        {
            return _context.Spell.Any(e => e.ID == id);
        }
    }
}
