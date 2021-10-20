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
    public class RecipeHarnessesController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public RecipeHarnessesController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/RecipeHarnesses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecipeHarness>>> GetRecipeHarness()
        {
            return await _context.RecipeHarness.ToListAsync();
        }

        // GET: api/RecipeHarnesses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RecipeHarness>> GetRecipeHarness(int id)
        {
            var recipeHarness = await _context.RecipeHarness.FindAsync(id);

            if (recipeHarness == null)
            {
                return NotFound();
            }

            return recipeHarness;
        }

        // PUT: api/RecipeHarnesses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecipeHarness(int id, RecipeHarness recipeHarness)
        {
            if (id != recipeHarness.ID)
            {
                return BadRequest();
            }

            _context.Entry(recipeHarness).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecipeHarnessExists(id))
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

        // POST: api/RecipeHarnesses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RecipeHarness>> PostRecipeHarness(RecipeHarness recipeHarness)
        {
            _context.RecipeHarness.Add(recipeHarness);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecipeHarness", new { id = recipeHarness.ID }, recipeHarness);
        }

        // DELETE: api/RecipeHarnesses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecipeHarness(int id)
        {
            var recipeHarness = await _context.RecipeHarness.FindAsync(id);
            if (recipeHarness == null)
            {
                return NotFound();
            }

            _context.RecipeHarness.Remove(recipeHarness);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RecipeHarnessExists(int id)
        {
            return _context.RecipeHarness.Any(e => e.ID == id);
        }
    }
}
