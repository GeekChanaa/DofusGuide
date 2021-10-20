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
    public class GroundsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public GroundsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/Grounds
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ground>>> GetGround()
        {
            return await _context.Ground.ToListAsync();
        }

        // GET: api/Grounds/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ground>> GetGround(int id)
        {
            var ground = await _context.Ground.FindAsync(id);

            if (ground == null)
            {
                return NotFound();
            }

            return ground;
        }

        // PUT: api/Grounds/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGround(int id, Ground ground)
        {
            if (id != ground.ID)
            {
                return BadRequest();
            }

            _context.Entry(ground).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GroundExists(id))
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

        // POST: api/Grounds
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Ground>> PostGround(Ground ground)
        {
            _context.Ground.Add(ground);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGround", new { id = ground.ID }, ground);
        }

        // DELETE: api/Grounds/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGround(int id)
        {
            var ground = await _context.Ground.FindAsync(id);
            if (ground == null)
            {
                return NotFound();
            }

            _context.Ground.Remove(ground);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GroundExists(int id)
        {
            return _context.Ground.Any(e => e.ID == id);
        }
    }
}
