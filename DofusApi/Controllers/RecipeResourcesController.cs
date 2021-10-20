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
    public class RecipeResourcesController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public RecipeResourcesController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/RecipeResources
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecipeResource>>> GetRecipeResource()
        {
            return await _context.RecipeResource.ToListAsync();
        }

        // GET: api/RecipeResources/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RecipeResource>> GetRecipeResource(int id)
        {
            var recipeResource = await _context.RecipeResource.FindAsync(id);

            if (recipeResource == null)
            {
                return NotFound();
            }

            return recipeResource;
        }

        // PUT: api/RecipeResources/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecipeResource(int id, RecipeResource recipeResource)
        {
            if (id != recipeResource.ID)
            {
                return BadRequest();
            }

            _context.Entry(recipeResource).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecipeResourceExists(id))
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

        // POST: api/RecipeResources
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RecipeResource>> PostRecipeResource(RecipeResource recipeResource)
        {
            _context.RecipeResource.Add(recipeResource);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecipeResource", new { id = recipeResource.ID }, recipeResource);
        }

        // DELETE: api/RecipeResources/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecipeResource(int id)
        {
            var recipeResource = await _context.RecipeResource.FindAsync(id);
            if (recipeResource == null)
            {
                return NotFound();
            }

            _context.RecipeResource.Remove(recipeResource);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RecipeResourceExists(int id)
        {
            return _context.RecipeResource.Any(e => e.ID == id);
        }
    }
}
