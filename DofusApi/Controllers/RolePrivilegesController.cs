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
    public class RolePrivilegesController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public RolePrivilegesController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/RolePrivileges
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RolePrivilege>>> GetRolePrivilege()
        {
            return await _context.RolePrivilege.ToListAsync();
        }

        // GET: api/RolePrivileges/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RolePrivilege>> GetRolePrivilege(int id)
        {
            var rolePrivilege = await _context.RolePrivilege.FindAsync(id);

            if (rolePrivilege == null)
            {
                return NotFound();
            }

            return rolePrivilege;
        }

        // PUT: api/RolePrivileges/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRolePrivilege(int id, RolePrivilege rolePrivilege)
        {
            if (id != rolePrivilege.ID)
            {
                return BadRequest();
            }

            _context.Entry(rolePrivilege).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RolePrivilegeExists(id))
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

        // POST: api/RolePrivileges
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RolePrivilege>> PostRolePrivilege(RolePrivilege rolePrivilege)
        {
            _context.RolePrivilege.Add(rolePrivilege);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRolePrivilege", new { id = rolePrivilege.ID }, rolePrivilege);
        }

        // DELETE: api/RolePrivileges/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRolePrivilege(int id)
        {
            var rolePrivilege = await _context.RolePrivilege.FindAsync(id);
            if (rolePrivilege == null)
            {
                return NotFound();
            }

            _context.RolePrivilege.Remove(rolePrivilege);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RolePrivilegeExists(int id)
        {
            return _context.RolePrivilege.Any(e => e.ID == id);
        }
    }
}
