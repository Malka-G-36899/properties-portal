using BL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Api
{
    public interface IBlPropertiesForPurchase
    {
        List<BlPropertyForPurchase> GetPropertiesForPurchaseByCustomerCode(int customerCode);
        Task<List<BlPropertyForPurchase>> AddPropertiesForPurchaseByCustomerCode(BlPropertyForPurchase p, int price);
        Task<List<BlPropertyForPurchase>> RemovePropertyByCode(int propertyCode, int price);
        Task<List<BlPropertyForPurchase>> UpdateProperty(BlPropertyForPurchase p);
    }
}
