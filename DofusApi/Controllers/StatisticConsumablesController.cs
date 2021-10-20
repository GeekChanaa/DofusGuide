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
    public class StatisticConsumablesController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public StatisticConsumablesController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/StatisticConsumables
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StatisticConsumable>>> GetStatisticConsumable()
        {
            return await _context.StatisticConsumable.ToListAsync();
        }

        // GET: api/StatisticConsumables/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StatisticConsumable>> GetStatisticConsumable(int id)
        {
            var statisticConsumable = await _context.StatisticConsumable.FindAsync(id);

            if (statisticConsumable == null)
            {
                return NotFound();
            }

            return statisticConsumable;
        }

        // PUT: api/StatisticConsumables/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStatisticConsumable(int id, StatisticConsumable statisticConsumable)
        {
            if (id != statisticConsumable.ID)
            {
                return BadRequest();
            }

            _context.Entry(statisticConsumable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StatisticConsumableExists(id))
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

        // POST: api/StatisticConsumables
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StatisticConsumable>> PostStatisticConsumable(StatisticConsumable statisticConsumable)
        {
            _context.StatisticConsumable.Add(statisticConsumable);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStatisticConsumable", new { id = statisticConsumable.ID }, statisticConsumable);
        }

        // DELETE: api/StatisticConsumables/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStatisticConsumable(int id)
        {
            var statisticConsumable = await _context.StatisticConsumable.FindAsync(id);
            if (statisticConsumable == null)
            {
                return NotFound();
            }

            _context.StatisticConsumable.Remove(statisticConsumable);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StatisticConsumableExists(int id)
        {
            return _context.StatisticConsumable.Any(e => e.ID == id);
        }
    }
}
