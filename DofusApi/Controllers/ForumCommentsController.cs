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
    public class ForumCommentsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public ForumCommentsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/ForumComments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ForumComment>>> GetForumComment()
        {
            return await _context.ForumComment.ToListAsync();
        }

        // GET: api/ForumComments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ForumComment>> GetForumComment(int id)
        {
            var forumComment = await _context.ForumComment.FindAsync(id);

            if (forumComment == null)
            {
                return NotFound();
            }

            return forumComment;
        }

        // PUT: api/ForumComments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutForumComment(int id, ForumComment forumComment)
        {
            if (id != forumComment.ID)
            {
                return BadRequest();
            }

            _context.Entry(forumComment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ForumCommentExists(id))
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

        // POST: api/ForumComments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ForumComment>> PostForumComment(ForumComment forumComment)
        {
            _context.ForumComment.Add(forumComment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetForumComment", new { id = forumComment.ID }, forumComment);
        }

        // DELETE: api/ForumComments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteForumComment(int id)
        {
            var forumComment = await _context.ForumComment.FindAsync(id);
            if (forumComment == null)
            {
                return NotFound();
            }

            _context.ForumComment.Remove(forumComment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ForumCommentExists(int id)
        {
            return _context.ForumComment.Any(e => e.ID == id);
        }
    }
}
