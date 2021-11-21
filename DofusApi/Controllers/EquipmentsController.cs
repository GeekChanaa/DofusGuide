using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DofusApi.Data;
using DofusApi.Models;
using DofusApi.Helpers;

namespace DofusApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EquipmentsController : BaseController<Equipment>
    {
        
        public EquipmentsController(DofusDataContext context, IBaseRepository<Equipment> repo) : base(context,repo)
        {
            
        }

        [HttpGet("{id}")]
        override public async Task<ActionResult<Equipment>> Get(int id)
        {
            var item = await this._repo.GetByID(id);

            if (item == null)
            {
                return NotFound();
            }

            return item;
        }
    }
}
