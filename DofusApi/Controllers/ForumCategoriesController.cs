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
    public class ForumCategoriesController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public ForumCategoriesController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/ForumCategories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ForumCategory>>> GetForumCategory()
        {
            return await _context.ForumCategory.ToListAsync();
        }

        // GET: api/ForumCategories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ForumCategory>> GetForumCategory(int id)
        {
            var forumCategory = await _context.ForumCategory.FindAsync(id);

            if (forumCategory == null)
            {
                return NotFound();
            }

            return forumCategory;
        }

        // PUT: api/ForumCategories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutForumCategory(int id, ForumCategory forumCategory)
        {
            if (id != forumCategory.ID)
            {
                return BadRequest();
            }

            _context.Entry(forumCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ForumCategoryExists(id))
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

        // POST: api/ForumCategories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ForumCategory>> PostForumCategory(ForumCategory forumCategory)
        {
            _context.ForumCategory.Add(forumCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetForumCategory", new { id = forumCategory.ID }, forumCategory);
        }

        // DELETE: api/ForumCategories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteForumCategory(int id)
        {
            var forumCategory = await _context.ForumCategory.FindAsync(id);
            if (forumCategory == null)
            {
                return NotFound();
            }

            _context.ForumCategory.Remove(forumCategory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ForumCategoryExists(int id)
        {
            return _context.ForumCategory.Any(e => e.ID == id);
        }
    }
}
