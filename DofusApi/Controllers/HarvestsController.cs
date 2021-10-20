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
    public class HarvestsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public HarvestsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/Harvests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Harvest>>> GetHarvest()
        {
            return await _context.Harvest.ToListAsync();
        }

        // GET: api/Harvests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Harvest>> GetHarvest(int id)
        {
            var harvest = await _context.Harvest.FindAsync(id);

            if (harvest == null)
            {
                return NotFound();
            }

            return harvest;
        }

        // PUT: api/Harvests/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHarvest(int id, Harvest harvest)
        {
            if (id != harvest.ID)
            {
                return BadRequest();
            }

            _context.Entry(harvest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HarvestExists(id))
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

        // POST: api/Harvests
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Harvest>> PostHarvest(Harvest harvest)
        {
            _context.Harvest.Add(harvest);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHarvest", new { id = harvest.ID }, harvest);
        }

        // DELETE: api/Harvests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHarvest(int id)
        {
            var harvest = await _context.Harvest.FindAsync(id);
            if (harvest == null)
            {
                return NotFound();
            }

            _context.Harvest.Remove(harvest);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HarvestExists(int id)
        {
            return _context.Harvest.Any(e => e.ID == id);
        }
    }
}
