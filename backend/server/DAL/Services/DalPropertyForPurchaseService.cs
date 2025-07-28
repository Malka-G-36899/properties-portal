using DAL.Api;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Services
{
    public class DalPropertyForPurchaseService : IDalPropertyForPurchase
    {
        dbcontext dbcontext;

        #region c-tor
        public DalPropertyForPurchaseService(dbcontext dbcontext)
        {
            this.dbcontext = dbcontext;
        }
        #endregion

        #region Get
        public List<PropertiesForPurchase> Get()
        {
            return dbcontext.PropertiesForPurchases.ToList();

        }
        #endregion

        #region AddNewPropertiesForPurchase
        public async Task Create(PropertiesForPurchase item)
        {
           dbcontext.PropertiesForPurchases.Add(item);

           await dbcontext.SaveChangesAsync();

        }
        #endregion

        #region RemovePropertyByCode
        public async Task<int> RemovePropertyByCode(int propertyCode)
        {
            PropertiesForPurchase p = dbcontext.PropertiesForPurchases.ToList().Find(x => x.PropertyForPurchaseId == propertyCode);
            if (p != null) { 
             dbcontext.PropertiesForPurchases.Remove(p);
              await dbcontext.SaveChangesAsync();
                return p.PurchaserId;
            }
            return -1;
        }


        #endregion

        #region  UpdateProperty
        public async Task UpdateProperty(PropertiesForPurchase p)
        {
            var po= Get().Find(x => x.PropertyForPurchaseId== p.PropertyForPurchaseId);
            po.MinAreaProperty=p.MinAreaProperty;
            po.MaxAreaProperty=p.MaxAreaProperty;
            po.City=p.City;
            po.MaxPrice=p.MaxPrice;
            dbcontext.Update(po);
           await dbcontext.SaveChangesAsync();    
        }
        #endregion


    }
}
