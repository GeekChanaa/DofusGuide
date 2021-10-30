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
    public class FurnituresController : BaseController<Furniture>
    {
        private readonly DofusDataContext _context;
        private readonly IBaseRepository<Furniture> _repo;

        public FurnituresController(DofusDataContext context, IBaseRepository<Furniture> repo) : base(context,repo)
        {
            
        }
    }
}
