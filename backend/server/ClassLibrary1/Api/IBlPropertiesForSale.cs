using BL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Api
{
    public interface IBlPropertiesForSale
    {
        List<BlPropertyForSale> GetPropertiesForSellByCustomerCode(int customerCode);
        List<BlPropertyForSale> GetPropertiesForSaleByPropertyCode(int propertyCode);
        Task<List<BlPropertyForSale>> AddPropertiesForSaleByCustomerCode(BlPropertyForSale p, int price);
       Task<List<BlPropertyForSale>> RemovePropertyByCode(int propertyCode, int price);
      Task<List<BlPropertyForSale>> UpdateProperty(BlPropertyForSale p);
    }
}
