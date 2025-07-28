using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Api
{
    public interface IBl
    {
        public IBlCustomers blCustomers { get; }

        public IBlPropertiesForSale blPropertiesForSale { get; }

        public IBlPropertiesForPurchase blPropertiesForPurchase { get; }
    }
}
