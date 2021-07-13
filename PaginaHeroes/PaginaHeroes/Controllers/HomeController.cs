using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PaginaHeroes.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace PaginaHeroes.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult Nosotros()
        {
            return View("Nosotros");
        }

        public IActionResult Home()
        {

            return View("Index");
        }

        public IActionResult Producto()
        {
            return View("Producto");
        }
        public IActionResult IniciarSesion()
        {
            return View("IniciarSesion");
        }
        public IActionResult Registro()
        {
            return View("Registro");
        }




    }
}
