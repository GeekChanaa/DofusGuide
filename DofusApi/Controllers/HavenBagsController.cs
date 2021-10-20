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
    public class HavenBagsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public HavenBagsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/HavenBags
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HavenBag>>> GetHavenBag()
        {
            return await _context.HavenBag.ToListAsync();
        }

        // GET: api/HavenBags/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HavenBag>> GetHavenBag(int id)
        {
            var havenBag = await _context.HavenBag.FindAsync(id);

            if (havenBag == null)
            {
                return NotFound();
            }

            return havenBag;
        }

        // PUT: api/HavenBags/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHavenBag(int id, HavenBag havenBag)
        {
            if (id != havenBag.ID)
            {
                return BadRequest();
            }

            _context.Entry(havenBag).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HavenBagExists(id))
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

        // POST: api/HavenBags
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<HavenBag>> PostHavenBag(HavenBag havenBag)
        {
            _context.HavenBag.Add(havenBag);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHavenBag", new { id = havenBag.ID }, havenBag);
        }

        // DELETE: api/HavenBags/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHavenBag(int id)
        {
            var havenBag = await _context.HavenBag.FindAsync(id);
            if (havenBag == null)
            {
                return NotFound();
            }

            _context.HavenBag.Remove(havenBag);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HavenBagExists(int id)
        {
            return _context.HavenBag.Any(e => e.ID == id);
        }
    }
}
