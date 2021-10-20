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
    public class ForumLikesController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public ForumLikesController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/ForumLikes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ForumLike>>> GetForumLike()
        {
            return await _context.ForumLike.ToListAsync();
        }

        // GET: api/ForumLikes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ForumLike>> GetForumLike(int id)
        {
            var forumLike = await _context.ForumLike.FindAsync(id);

            if (forumLike == null)
            {
                return NotFound();
            }

            return forumLike;
        }

        // PUT: api/ForumLikes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutForumLike(int id, ForumLike forumLike)
        {
            if (id != forumLike.ID)
            {
                return BadRequest();
            }

            _context.Entry(forumLike).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ForumLikeExists(id))
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

        // POST: api/ForumLikes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ForumLike>> PostForumLike(ForumLike forumLike)
        {
            _context.ForumLike.Add(forumLike);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetForumLike", new { id = forumLike.ID }, forumLike);
        }

        // DELETE: api/ForumLikes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteForumLike(int id)
        {
            var forumLike = await _context.ForumLike.FindAsync(id);
            if (forumLike == null)
            {
                return NotFound();
            }

            _context.ForumLike.Remove(forumLike);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ForumLikeExists(int id)
        {
            return _context.ForumLike.Any(e => e.ID == id);
        }
    }
}
