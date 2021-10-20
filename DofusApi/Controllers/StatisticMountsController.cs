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
    public class StatisticMountsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public StatisticMountsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/StatisticMounts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StatisticMount>>> GetStatisticMount()
        {
            return await _context.StatisticMount.ToListAsync();
        }

        // GET: api/StatisticMounts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StatisticMount>> GetStatisticMount(int id)
        {
            var statisticMount = await _context.StatisticMount.FindAsync(id);

            if (statisticMount == null)
            {
                return NotFound();
            }

            return statisticMount;
        }

        // PUT: api/StatisticMounts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStatisticMount(int id, StatisticMount statisticMount)
        {
            if (id != statisticMount.ID)
            {
                return BadRequest();
            }

            _context.Entry(statisticMount).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StatisticMountExists(id))
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

        // POST: api/StatisticMounts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StatisticMount>> PostStatisticMount(StatisticMount statisticMount)
        {
            _context.StatisticMount.Add(statisticMount);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStatisticMount", new { id = statisticMount.ID }, statisticMount);
        }

        // DELETE: api/StatisticMounts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStatisticMount(int id)
        {
            var statisticMount = await _context.StatisticMount.FindAsync(id);
            if (statisticMount == null)
            {
                return NotFound();
            }

            _context.StatisticMount.Remove(statisticMount);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StatisticMountExists(int id)
        {
            return _context.StatisticMount.Any(e => e.ID == id);
        }
    }
}
