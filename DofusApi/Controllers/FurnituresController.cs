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
    public class FurnituresController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public FurnituresController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/Furnitures
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Furniture>>> GetFurniture()
        {
            return await _context.Furniture.ToListAsync();
        }

        // GET: api/Furnitures/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Furniture>> GetFurniture(int id)
        {
            var furniture = await _context.Furniture.FindAsync(id);

            if (furniture == null)
            {
                return NotFound();
            }

            return furniture;
        }

        // PUT: api/Furnitures/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFurniture(int id, Furniture furniture)
        {
            if (id != furniture.ID)
            {
                return BadRequest();
            }

            _context.Entry(furniture).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FurnitureExists(id))
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

        // POST: api/Furnitures
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Furniture>> PostFurniture(Furniture furniture)
        {
            _context.Furniture.Add(furniture);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFurniture", new { id = furniture.ID }, furniture);
        }

        // DELETE: api/Furnitures/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFurniture(int id)
        {
            var furniture = await _context.Furniture.FindAsync(id);
            if (furniture == null)
            {
                return NotFound();
            }

            _context.Furniture.Remove(furniture);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FurnitureExists(int id)
        {
            return _context.Furniture.Any(e => e.ID == id);
        }
    }
}
