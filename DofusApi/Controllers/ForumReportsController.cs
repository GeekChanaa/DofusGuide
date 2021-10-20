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
    public class ForumReportsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public ForumReportsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/ForumReports
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ForumReport>>> GetForumReport()
        {
            return await _context.ForumReport.ToListAsync();
        }

        // GET: api/ForumReports/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ForumReport>> GetForumReport(int id)
        {
            var forumReport = await _context.ForumReport.FindAsync(id);

            if (forumReport == null)
            {
                return NotFound();
            }

            return forumReport;
        }

        // PUT: api/ForumReports/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutForumReport(int id, ForumReport forumReport)
        {
            if (id != forumReport.ID)
            {
                return BadRequest();
            }

            _context.Entry(forumReport).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ForumReportExists(id))
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

        // POST: api/ForumReports
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ForumReport>> PostForumReport(ForumReport forumReport)
        {
            _context.ForumReport.Add(forumReport);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetForumReport", new { id = forumReport.ID }, forumReport);
        }

        // DELETE: api/ForumReports/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteForumReport(int id)
        {
            var forumReport = await _context.ForumReport.FindAsync(id);
            if (forumReport == null)
            {
                return NotFound();
            }

            _context.ForumReport.Remove(forumReport);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ForumReportExists(int id)
        {
            return _context.ForumReport.Any(e => e.ID == id);
        }
    }
}
