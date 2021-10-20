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
    public class RecipeWeaponsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public RecipeWeaponsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/RecipeWeapons
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecipeWeapon>>> GetRecipeWeapon()
        {
            return await _context.RecipeWeapon.ToListAsync();
        }

        // GET: api/RecipeWeapons/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RecipeWeapon>> GetRecipeWeapon(int id)
        {
            var recipeWeapon = await _context.RecipeWeapon.FindAsync(id);

            if (recipeWeapon == null)
            {
                return NotFound();
            }

            return recipeWeapon;
        }

        // PUT: api/RecipeWeapons/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecipeWeapon(int id, RecipeWeapon recipeWeapon)
        {
            if (id != recipeWeapon.ID)
            {
                return BadRequest();
            }

            _context.Entry(recipeWeapon).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecipeWeaponExists(id))
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

        // POST: api/RecipeWeapons
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RecipeWeapon>> PostRecipeWeapon(RecipeWeapon recipeWeapon)
        {
            _context.RecipeWeapon.Add(recipeWeapon);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecipeWeapon", new { id = recipeWeapon.ID }, recipeWeapon);
        }

        // DELETE: api/RecipeWeapons/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecipeWeapon(int id)
        {
            var recipeWeapon = await _context.RecipeWeapon.FindAsync(id);
            if (recipeWeapon == null)
            {
                return NotFound();
            }

            _context.RecipeWeapon.Remove(recipeWeapon);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RecipeWeaponExists(int id)
        {
            return _context.RecipeWeapon.Any(e => e.ID == id);
        }
    }
}
