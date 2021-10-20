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
    public class RecipeItemsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public RecipeItemsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/RecipeItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecipeItem>>> GetRecipeItem()
        {
            return await _context.RecipeItem.ToListAsync();
        }

        // GET: api/RecipeItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RecipeItem>> GetRecipeItem(int id)
        {
            var recipeItem = await _context.RecipeItem.FindAsync(id);

            if (recipeItem == null)
            {
                return NotFound();
            }

            return recipeItem;
        }

        // PUT: api/RecipeItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecipeItem(int id, RecipeItem recipeItem)
        {
            if (id != recipeItem.ID)
            {
                return BadRequest();
            }

            _context.Entry(recipeItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecipeItemExists(id))
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

        // POST: api/RecipeItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RecipeItem>> PostRecipeItem(RecipeItem recipeItem)
        {
            _context.RecipeItem.Add(recipeItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecipeItem", new { id = recipeItem.ID }, recipeItem);
        }

        // DELETE: api/RecipeItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecipeItem(int id)
        {
            var recipeItem = await _context.RecipeItem.FindAsync(id);
            if (recipeItem == null)
            {
                return NotFound();
            }

            _context.RecipeItem.Remove(recipeItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RecipeItemExists(int id)
        {
            return _context.RecipeItem.Any(e => e.ID == id);
        }
    }
}
