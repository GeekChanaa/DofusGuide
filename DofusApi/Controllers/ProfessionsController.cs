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
    public class ProfessionsController : BaseController<Profession>
    {
        private readonly DofusDataContext _context;
        private readonly IBaseRepository<Profession> _repo;

        public ProfessionsController(DofusDataContext context, IBaseRepository<Profession> repo) : base(context,repo)
        {
            
        }
    }
}
