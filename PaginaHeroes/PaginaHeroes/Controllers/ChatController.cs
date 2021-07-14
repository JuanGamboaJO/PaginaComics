using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace PaginaHeroes.Controllers
{
    public class ChatController : Controller
    {
        public IActionResult Chat(int room)
        {
            return View("Chat",room);
        }
    }
}
