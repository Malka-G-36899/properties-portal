using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Api
{
    public interface IDal
    {
        public IDalCustomers customers { get; }

        public IDalPropertiesForSale PropertiesForSale { get; }

        public IDalPropertyForPurchase PropertiesForPurchase { get; }

      
    }
}
