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
    public class StatisticWeaponsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public StatisticWeaponsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/StatisticWeapons
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StatisticWeapon>>> GetStatisticWeapon()
        {
            return await _context.StatisticWeapon.ToListAsync();
        }

        // GET: api/StatisticWeapons/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StatisticWeapon>> GetStatisticWeapon(int id)
        {
            var statisticWeapon = await _context.StatisticWeapon.FindAsync(id);

            if (statisticWeapon == null)
            {
                return NotFound();
            }

            return statisticWeapon;
        }

        // PUT: api/StatisticWeapons/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStatisticWeapon(int id, StatisticWeapon statisticWeapon)
        {
            if (id != statisticWeapon.ID)
            {
                return BadRequest();
            }

            _context.Entry(statisticWeapon).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StatisticWeaponExists(id))
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

        // POST: api/StatisticWeapons
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StatisticWeapon>> PostStatisticWeapon(StatisticWeapon statisticWeapon)
        {
            _context.StatisticWeapon.Add(statisticWeapon);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStatisticWeapon", new { id = statisticWeapon.ID }, statisticWeapon);
        }

        // DELETE: api/StatisticWeapons/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStatisticWeapon(int id)
        {
            var statisticWeapon = await _context.StatisticWeapon.FindAsync(id);
            if (statisticWeapon == null)
            {
                return NotFound();
            }

            _context.StatisticWeapon.Remove(statisticWeapon);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StatisticWeaponExists(int id)
        {
            return _context.StatisticWeapon.Any(e => e.ID == id);
        }
    }
}
