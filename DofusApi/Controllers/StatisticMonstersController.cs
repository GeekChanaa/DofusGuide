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
    public class StatisticMonstersController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public StatisticMonstersController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/StatisticMonsters
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StatisticMonster>>> GetStatisticMonster()
        {
            return await _context.StatisticMonster.ToListAsync();
        }

        // GET: api/StatisticMonsters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StatisticMonster>> GetStatisticMonster(int id)
        {
            var statisticMonster = await _context.StatisticMonster.FindAsync(id);

            if (statisticMonster == null)
            {
                return NotFound();
            }

            return statisticMonster;
        }

        // PUT: api/StatisticMonsters/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStatisticMonster(int id, StatisticMonster statisticMonster)
        {
            if (id != statisticMonster.ID)
            {
                return BadRequest();
            }

            _context.Entry(statisticMonster).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StatisticMonsterExists(id))
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

        // POST: api/StatisticMonsters
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StatisticMonster>> PostStatisticMonster(StatisticMonster statisticMonster)
        {
            _context.StatisticMonster.Add(statisticMonster);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStatisticMonster", new { id = statisticMonster.ID }, statisticMonster);
        }

        // DELETE: api/StatisticMonsters/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStatisticMonster(int id)
        {
            var statisticMonster = await _context.StatisticMonster.FindAsync(id);
            if (statisticMonster == null)
            {
                return NotFound();
            }

            _context.StatisticMonster.Remove(statisticMonster);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StatisticMonsterExists(int id)
        {
            return _context.StatisticMonster.Any(e => e.ID == id);
        }
    }
}
