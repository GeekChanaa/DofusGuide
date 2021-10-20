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
    public class StatisticIdolsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public StatisticIdolsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/StatisticIdols
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StatisticIdol>>> GetStatisticIdol()
        {
            return await _context.StatisticIdol.ToListAsync();
        }

        // GET: api/StatisticIdols/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StatisticIdol>> GetStatisticIdol(int id)
        {
            var statisticIdol = await _context.StatisticIdol.FindAsync(id);

            if (statisticIdol == null)
            {
                return NotFound();
            }

            return statisticIdol;
        }

        // PUT: api/StatisticIdols/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStatisticIdol(int id, StatisticIdol statisticIdol)
        {
            if (id != statisticIdol.ID)
            {
                return BadRequest();
            }

            _context.Entry(statisticIdol).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StatisticIdolExists(id))
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

        // POST: api/StatisticIdols
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StatisticIdol>> PostStatisticIdol(StatisticIdol statisticIdol)
        {
            _context.StatisticIdol.Add(statisticIdol);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStatisticIdol", new { id = statisticIdol.ID }, statisticIdol);
        }

        // DELETE: api/StatisticIdols/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStatisticIdol(int id)
        {
            var statisticIdol = await _context.StatisticIdol.FindAsync(id);
            if (statisticIdol == null)
            {
                return NotFound();
            }

            _context.StatisticIdol.Remove(statisticIdol);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StatisticIdolExists(int id)
        {
            return _context.StatisticIdol.Any(e => e.ID == id);
        }
    }
}
