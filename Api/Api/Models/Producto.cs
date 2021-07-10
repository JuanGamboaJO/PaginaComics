using System;
using System.Collections.Generic;

#nullable disable

namespace Api.Models
{
    public partial class Producto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public decimal Precio { get; set; }
        public string Informacion { get; set; }
        public string Imagen { get; set; }

        public string Imagenl { get; set; }
    }
}
