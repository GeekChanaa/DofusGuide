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
    public class RecipeItemsController : BaseController<Consumable>
    {

        public RecipeItemsController(DofusDataContext context, IBaseRepository<Consumable> repo) : base(context,repo)
        {
            
        }
    }
}
