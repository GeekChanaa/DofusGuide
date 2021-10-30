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
    public class RolePrivilegesController : BaseController<RolePrivilege>
    {
        private readonly DofusDataContext _context;
        private readonly IBaseRepository<RolePrivilege> _repo;

        public RolePrivilegesController(DofusDataContext context, IBaseRepository<RolePrivilege> repo) : base(context,repo)
        {
            
        }
    }
}
