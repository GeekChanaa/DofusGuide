using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DofusApi.Hdv.Data;
using DofusApi.Hdv.Models;
using DofusApi.Hdv.Helpers;

namespace DofusApi.Hdv.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RunePriceController : BaseController<RunePrice>
    {
        
        public RunePriceController(DofusHdvDataContext context, IBaseRepository<RunePrice> repo) : base(context,repo)
        {
            
        }
    }
}
