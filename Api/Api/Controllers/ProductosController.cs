using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Models.Producto> Get()
        {
            using (var db= new Models.SuperHeroesContext()) 
            {
                IEnumerable<Models.Producto> productos = db.Productos.ToList();
                return productos;
            }
        }
    }
}
