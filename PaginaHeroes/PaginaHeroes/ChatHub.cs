using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaginaHeroes
{
    public class ChatHub: Hub
    {
        public async Task SendMessage(string room1,string room2,string user,string message)
        {
            await Clients.Groups(room1,group2:room2).SendAsync("ReceiveMessage", user, message);
        }

        public async Task AddToGroups(string room1)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, room1);
            

            await Clients.Group(room1).SendAsync("Showho", $"Alguien se conecto {Context.ConnectionId}");
           
        }
    }
}
