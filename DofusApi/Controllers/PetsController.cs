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
    public class PetsController : ControllerBase
    {
        private readonly DofusDataContext _context;

        public PetsController(DofusDataContext context)
        {
            _context = context;
        }

        // GET: api/Pets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pet>>> GetPet()
        {
            return await _context.Pet.ToListAsync();
        }

        // GET: api/Pets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Pet>> GetPet(int id)
        {
            var pet = await _context.Pet.FindAsync(id);

            if (pet == null)
            {
                return NotFound();
            }

            return pet;
        }

        // PUT: api/Pets/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPet(int id, Pet pet)
        {
            if (id != pet.ID)
            {
                return BadRequest();
            }

            _context.Entry(pet).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PetExists(id))
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

        // POST: api/Pets
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Pet>> PostPet(Pet pet)
        {
            _context.Pet.Add(pet);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPet", new { id = pet.ID }, pet);
        }

        // DELETE: api/Pets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePet(int id)
        {
            var pet = await _context.Pet.FindAsync(id);
            if (pet == null)
            {
                return NotFound();
            }

            _context.Pet.Remove(pet);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PetExists(int id)
        {
            return _context.Pet.Any(e => e.ID == id);
        }
    }
}
