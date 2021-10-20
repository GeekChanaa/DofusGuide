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
    public class CharWeaponsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public CharWeaponsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/CharWeapons
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CharWeapon>>> GetCharWeapon()
        {
            return await _context.CharWeapon.ToListAsync();
        }

        // GET: api/CharWeapons/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CharWeapon>> GetCharWeapon(int id)
        {
            var charWeapon = await _context.CharWeapon.FindAsync(id);

            if (charWeapon == null)
            {
                return NotFound();
            }

            return charWeapon;
        }

        // PUT: api/CharWeapons/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCharWeapon(int id, CharWeapon charWeapon)
        {
            if (id != charWeapon.ID)
            {
                return BadRequest();
            }

            _context.Entry(charWeapon).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CharWeaponExists(id))
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

        // POST: api/CharWeapons
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CharWeapon>> PostCharWeapon(CharWeapon charWeapon)
        {
            _context.CharWeapon.Add(charWeapon);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCharWeapon", new { id = charWeapon.ID }, charWeapon);
        }

        // DELETE: api/CharWeapons/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCharWeapon(int id)
        {
            var charWeapon = await _context.CharWeapon.FindAsync(id);
            if (charWeapon == null)
            {
                return NotFound();
            }

            _context.CharWeapon.Remove(charWeapon);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CharWeaponExists(int id)
        {
            return _context.CharWeapon.Any(e => e.ID == id);
        }
    }
}
