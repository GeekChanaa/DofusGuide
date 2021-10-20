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
    public class StatisticSetsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public StatisticSetsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/StatisticSets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StatisticSet>>> GetStatisticSet()
        {
            return await _context.StatisticSet.ToListAsync();
        }

        // GET: api/StatisticSets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StatisticSet>> GetStatisticSet(int id)
        {
            var statisticSet = await _context.StatisticSet.FindAsync(id);

            if (statisticSet == null)
            {
                return NotFound();
            }

            return statisticSet;
        }

        // PUT: api/StatisticSets/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStatisticSet(int id, StatisticSet statisticSet)
        {
            if (id != statisticSet.ID)
            {
                return BadRequest();
            }

            _context.Entry(statisticSet).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StatisticSetExists(id))
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

        // POST: api/StatisticSets
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StatisticSet>> PostStatisticSet(StatisticSet statisticSet)
        {
            _context.StatisticSet.Add(statisticSet);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStatisticSet", new { id = statisticSet.ID }, statisticSet);
        }

        // DELETE: api/StatisticSets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStatisticSet(int id)
        {
            var statisticSet = await _context.StatisticSet.FindAsync(id);
            if (statisticSet == null)
            {
                return NotFound();
            }

            _context.StatisticSet.Remove(statisticSet);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StatisticSetExists(int id)
        {
            return _context.StatisticSet.Any(e => e.ID == id);
        }
    }
}
