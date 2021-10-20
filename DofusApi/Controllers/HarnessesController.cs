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
    public class HarnessesController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public HarnessesController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/Harnesses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Harness>>> GetHarness()
        {
            return await _context.Harness.ToListAsync();
        }

        // GET: api/Harnesses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Harness>> GetHarness(int id)
        {
            var harness = await _context.Harness.FindAsync(id);

            if (harness == null)
            {
                return NotFound();
            }

            return harness;
        }

        // PUT: api/Harnesses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHarness(int id, Harness harness)
        {
            if (id != harness.ID)
            {
                return BadRequest();
            }

            _context.Entry(harness).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HarnessExists(id))
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

        // POST: api/Harnesses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Harness>> PostHarness(Harness harness)
        {
            _context.Harness.Add(harness);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHarness", new { id = harness.ID }, harness);
        }

        // DELETE: api/Harnesses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHarness(int id)
        {
            var harness = await _context.Harness.FindAsync(id);
            if (harness == null)
            {
                return NotFound();
            }

            _context.Harness.Remove(harness);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HarnessExists(int id)
        {
            return _context.Harness.Any(e => e.ID == id);
        }
    }
}
