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
    public class MountsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public MountsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/Mounts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Mount>>> GetMount()
        {
            return await _context.Mount.ToListAsync();
        }

        // GET: api/Mounts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Mount>> GetMount(int id)
        {
            var mount = await _context.Mount.FindAsync(id);

            if (mount == null)
            {
                return NotFound();
            }

            return mount;
        }

        // PUT: api/Mounts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMount(int id, Mount mount)
        {
            if (id != mount.ID)
            {
                return BadRequest();
            }

            _context.Entry(mount).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MountExists(id))
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

        // POST: api/Mounts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Mount>> PostMount(Mount mount)
        {
            _context.Mount.Add(mount);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMount", new { id = mount.ID }, mount);
        }

        // DELETE: api/Mounts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMount(int id)
        {
            var mount = await _context.Mount.FindAsync(id);
            if (mount == null)
            {
                return NotFound();
            }

            _context.Mount.Remove(mount);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MountExists(int id)
        {
            return _context.Mount.Any(e => e.ID == id);
        }
    }
}
