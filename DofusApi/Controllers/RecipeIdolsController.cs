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
    public class RecipeIdolsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public RecipeIdolsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/RecipeIdols
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecipeIdol>>> GetRecipeIdol()
        {
            return await _context.RecipeIdol.ToListAsync();
        }

        // GET: api/RecipeIdols/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RecipeIdol>> GetRecipeIdol(int id)
        {
            var recipeIdol = await _context.RecipeIdol.FindAsync(id);

            if (recipeIdol == null)
            {
                return NotFound();
            }

            return recipeIdol;
        }

        // PUT: api/RecipeIdols/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecipeIdol(int id, RecipeIdol recipeIdol)
        {
            if (id != recipeIdol.ID)
            {
                return BadRequest();
            }

            _context.Entry(recipeIdol).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecipeIdolExists(id))
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

        // POST: api/RecipeIdols
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RecipeIdol>> PostRecipeIdol(RecipeIdol recipeIdol)
        {
            _context.RecipeIdol.Add(recipeIdol);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecipeIdol", new { id = recipeIdol.ID }, recipeIdol);
        }

        // DELETE: api/RecipeIdols/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecipeIdol(int id)
        {
            var recipeIdol = await _context.RecipeIdol.FindAsync(id);
            if (recipeIdol == null)
            {
                return NotFound();
            }

            _context.RecipeIdol.Remove(recipeIdol);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RecipeIdolExists(int id)
        {
            return _context.RecipeIdol.Any(e => e.ID == id);
        }
    }
}
