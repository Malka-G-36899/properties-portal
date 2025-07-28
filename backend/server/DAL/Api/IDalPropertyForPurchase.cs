using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Api
{
    public interface IDalPropertyForPurchase
    {
        List<PropertiesForPurchase> Get();
        Task Create(PropertiesForPurchase propertyForPurchase);
        Task<int> RemovePropertyByCode(int propertyCode);
        Task UpdateProperty(PropertiesForPurchase p);
    }
}
