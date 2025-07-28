using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Models
{
    public class BlPropertyForPurchase
    {
        public int PurchaserId { get; set; }

        public int MinAreaProperty { get; set; }

        public int MaxAreaProperty { get; set; }

        public string City { get; set; }

        public int MaxPrice { get; set; }

        public int PropertyForPurchaseId { get; set; }

        //public virtual Customer Purchaser { get; set; } = null!;
    }
}
