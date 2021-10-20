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
    public class ConsumablesController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public ConsumablesController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/Consumables
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Consumable>>> GetConsumable()
        {
            return await _context.Consumable.ToListAsync();
        }

        // GET: api/Consumables/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Consumable>> GetConsumable(int id)
        {
            var consumable = await _context.Consumable.FindAsync(id);

            if (consumable == null)
            {
                return NotFound();
            }

            return consumable;
        }

        // PUT: api/Consumables/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConsumable(int id, Consumable consumable)
        {
            if (id != consumable.ID)
            {
                return BadRequest();
            }

            _context.Entry(consumable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConsumableExists(id))
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

        // POST: api/Consumables
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Consumable>> PostConsumable(Consumable consumable)
        {
            _context.Consumable.Add(consumable);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetConsumable", new { id = consumable.ID }, consumable);
        }

        // DELETE: api/Consumables/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConsumable(int id)
        {
            var consumable = await _context.Consumable.FindAsync(id);
            if (consumable == null)
            {
                return NotFound();
            }

            _context.Consumable.Remove(consumable);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ConsumableExists(int id)
        {
            return _context.Consumable.Any(e => e.ID == id);
        }
    }
}
