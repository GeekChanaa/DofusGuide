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
    public class MountsController : BaseController<Mount>
    {
        private readonly DofusDataContext _context;
        private readonly IBaseRepository<Mount> _repo;

        public MountsController(DofusDataContext context, IBaseRepository<Mount> repo) : base(context,repo)
        {
            
        }
    }
}
