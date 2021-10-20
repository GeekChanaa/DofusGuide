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
    public class StatisticPetsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public StatisticPetsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/StatisticPets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StatisticPet>>> GetStatisticPet()
        {
            return await _context.StatisticPet.ToListAsync();
        }

        // GET: api/StatisticPets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StatisticPet>> GetStatisticPet(int id)
        {
            var statisticPet = await _context.StatisticPet.FindAsync(id);

            if (statisticPet == null)
            {
                return NotFound();
            }

            return statisticPet;
        }

        // PUT: api/StatisticPets/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStatisticPet(int id, StatisticPet statisticPet)
        {
            if (id != statisticPet.ID)
            {
                return BadRequest();
            }

            _context.Entry(statisticPet).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StatisticPetExists(id))
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

        // POST: api/StatisticPets
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StatisticPet>> PostStatisticPet(StatisticPet statisticPet)
        {
            _context.StatisticPet.Add(statisticPet);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStatisticPet", new { id = statisticPet.ID }, statisticPet);
        }

        // DELETE: api/StatisticPets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStatisticPet(int id)
        {
            var statisticPet = await _context.StatisticPet.FindAsync(id);
            if (statisticPet == null)
            {
                return NotFound();
            }

            _context.StatisticPet.Remove(statisticPet);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StatisticPetExists(int id)
        {
            return _context.StatisticPet.Any(e => e.ID == id);
        }
    }
}
