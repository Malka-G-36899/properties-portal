using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Models
{
    public class BlPropertyForSale
    {
        public int SellsId { get; set; }

        public int PropertyId { get; set; }

        public int PropertyArea { get; set; }

        public string PropertyCity { get; set; }

        public string PropertyNeighborhood { get; set; }

        public int PropertyPrice { get; set; }

        public string? PropertyGeneralDescription { get; set; }

        public int PropertyNumOfInterests { get; set; }

        public  string Sellsemail { get; set; } 

        //public virtual ICollection<Customer> Customers { get; set; } = new List<Customer>();
    }
}
