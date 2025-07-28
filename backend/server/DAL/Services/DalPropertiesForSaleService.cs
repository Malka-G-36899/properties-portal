using DAL.Api;
using DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Services
{
    public class DalPropertiesForSaleService:IDalPropertiesForSale
    {
        dbcontext dbcontext;

        #region c-tor
        public DalPropertiesForSaleService(dbcontext dbcontext)
        {
            this.dbcontext = dbcontext;
        }
        #endregion

        #region Get
        public List<PropertyForSale> Get()
        {
            return dbcontext.PropertyForSales.Include(x => x.Sells).ToList();

        }
        #endregion

        #region AddNewPropertyForSale
        public async Task Create(PropertyForSale item)
        {
            dbcontext.PropertyForSales.Add(item);

           await dbcontext.SaveChangesAsync();
        }
        #endregion

        #region RemovePropertyByCode
        //public async Task<int> RemovePropertyByCode(int propertyCode)
        //{

        //    PropertyForSale p =await dbcontext.PropertyForSales.FirstOrDefault(x => x.PropertyId == propertyCode);
        //    //dbcontext.PropertyForSales.ToList().Find(x => x.PropertyId == propertyCode);
        //    if (p != null)
        //    {
        //         dbcontext.PropertyForSales.Remove(p);
        //        await dbcontext.SaveChanges();
        //        return p.SellsId;
        //    }
        //    return -1;
        //}
        public async Task<int> RemovePropertyByCode(int propertyCode)
        {
            PropertyForSale p = dbcontext.PropertyForSales.FirstOrDefault(x => x.PropertyId == propertyCode); // הסר את ה-await

            if (p != null)
            {
                int sellsId = p.SellsId;

                dbcontext.PropertyForSales.Remove(p);
                await dbcontext.SaveChangesAsync();

                return sellsId;
            }
            return -1;
        }
        #endregion

        #region  UpdateProperty
        public async Task UpdateProperty(PropertyForSale p)
        {
            var po = Get().Find(x => x.PropertyId == p.PropertyId);
            po.PropertyArea = p.PropertyArea;
            po.PropertyCity = p.PropertyCity;
            po.PropertyNeighborhood = p.PropertyNeighborhood;
            po.PropertyPrice = p.PropertyPrice;
            po.PropertyGeneralDescription = p.PropertyGeneralDescription;
            po.PropertyNumOfInterests =0;
            po.Customers = null;
            dbcontext.Update(po);
            await dbcontext.SaveChangesAsync();
        }
        #endregion


    }
}
