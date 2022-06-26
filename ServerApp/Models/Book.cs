using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApp.Models
{
    public class Book
    {
        public int id { get; set; }
        public string? title { get; set; }
        public string? description { get; set; }
        public string? author { get; set; }
        public double? rating { get; set; }
    }
}