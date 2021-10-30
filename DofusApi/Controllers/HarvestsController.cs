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
    public class HarvestsController : BaseController<Harvest>
    {
        private readonly DofusDataContext _context;
        private readonly IBaseRepository<Harvest> _repo;

        public HarvestsController(DofusDataContext context, IBaseRepository<Harvest> repo) : base(context,repo)
        {
            
        }
    }
}
