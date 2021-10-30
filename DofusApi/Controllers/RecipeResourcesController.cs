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
    public class RecipeResources : BaseController<RecipeResource>
    {
        private readonly DofusDataContext _context;
        private readonly IBaseRepository<RecipeResource> _repo;

        public RecipeResources(DofusDataContext context, IBaseRepository<RecipeResource> repo) : base(context,repo)
        {
            
        }
    }
}
