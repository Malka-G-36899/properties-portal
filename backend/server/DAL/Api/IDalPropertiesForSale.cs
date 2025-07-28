using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Api
{
    public interface IDalPropertiesForSale
    {
        List<PropertyForSale> Get();
        Task Create(PropertyForSale propertyForSale);
         Task <int> RemovePropertyByCode(int propertyCode);
         Task UpdateProperty(PropertyForSale p);
    }
}
