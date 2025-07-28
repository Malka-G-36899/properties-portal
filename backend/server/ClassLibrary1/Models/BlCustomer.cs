using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Models
{
    public class BlCustomer
    {
        public int CustomerId { get; set; }

        public string CustomerName { get; set; }

        public string CustomerCreditCardNumber { get; set; }

        public string CustomerCvv { get; set; }

        public string CustomerValidThru { get; set; } 

        public int CustomerMonthPrice { get; set; }

        public string CustomerEmail { get; set; }

        public string CustomerPassword { get; set; }

        public  List<BlPropertyForPurchase> PropertiesForPurchases { get; set; } = new List<BlPropertyForPurchase>();

        public  List<BlPropertyForSale> PropertyForSales { get; set; } = new List<BlPropertyForSale>();

        public  List<BlPropertyForSale> FavoriteProperties { get; set; } = new List<BlPropertyForSale>();
    }
}

