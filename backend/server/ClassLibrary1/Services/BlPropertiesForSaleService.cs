using BL.Api;
using BL.Models;
using DAL.Api;
using DAL.Models;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Services
{
    public class BlPropertiesForSaleService : IBlPropertiesForSale
    {
        //IDal dal;
        IDalPropertiesForSale propertiesForSale;
        IDalPropertyForPurchase propertiesForPurchase;
        IDalCustomers customers;

        #region c-tor
        public BlPropertiesForSaleService(IDal dal)
        {
            this.propertiesForSale = dal.PropertiesForSale;
            this.propertiesForPurchase = dal.PropertiesForPurchase;
            this.customers = dal.customers;

        }
        #endregion

        #region GetPropertiesForSellByCustomerCode
        public List<BlPropertyForSale> GetPropertiesForSellByCustomerCode(int customerCode)
        {
            var cList = propertiesForSale.Get();
            List<BlPropertyForSale> list = new List<BlPropertyForSale>();
            foreach (var c in cList)
            {
                if (c.SellsId == customerCode)
                    list.Add(ToBl(c));
            }
            return list;

        }
        #endregion

        #region GetPropertiesForSaleByPropertyCode
        public List<BlPropertyForSale> GetPropertiesForSaleByPropertyCode(int propertyCode)
        {
            var cList = propertiesForSale.Get();
            PropertiesForPurchase p=propertiesForPurchase.Get().ToList().Find(x=>x.PropertyForPurchaseId==propertyCode);
            List<BlPropertyForSale> list = new List<BlPropertyForSale>();
            foreach (var c in cList)
            {
                if (c.PropertyArea >= p.MinAreaProperty && c.PropertyArea <= p.MaxAreaProperty &&
                    c.PropertyCity.Equals(p.City) && c.PropertyPrice <= p.MaxPrice)
                    list.Add(ToBl(c));
            }
            return list;
        }
        #endregion

        #region AddPropertiesForSaleByCustomerCode
        public async Task<List<BlPropertyForSale>> AddPropertiesForSaleByCustomerCode(BlPropertyForSale p, int price)
        { // בדיקות תקינות
            PropertyForSale dp = new PropertyForSale()
            {
                SellsId = p.SellsId,
                PropertyId = p.PropertyId,
                PropertyArea = p.PropertyArea,
                PropertyCity = p.PropertyCity,
                PropertyNeighborhood = p.PropertyNeighborhood,
                PropertyPrice = p.PropertyPrice,
                PropertyGeneralDescription = p.PropertyGeneralDescription,
                PropertyNumOfInterests = p.PropertyNumOfInterests

            };
            await propertiesForSale.Create(dp);
            customers.UpdateMonthPrice(p.SellsId, price);
            return GetPropertiesForSellByCustomerCode(p.SellsId);

        }
        #endregion

        #region RemovePropertyByCode
        public async Task<List<BlPropertyForSale>> RemovePropertyByCode(int propertyCode, int price)
        {
            int code =await propertiesForSale.RemovePropertyByCode(propertyCode);
            if (code != -1)
            {
                customers.UpdateMonthPrice(code, price * -1);
                return  GetPropertiesForSellByCustomerCode(code);}
            else
                return null;
        }
        #endregion

        #region UpdateProperty
        public  async Task<List<BlPropertyForSale>> UpdateProperty(BlPropertyForSale p)
        {
            await propertiesForSale.UpdateProperty(ToDal(p));
            return GetPropertiesForSellByCustomerCode(p.SellsId);
        }
        #endregion

        #region casting function
        public PropertyForSale ToDal(BlPropertyForSale bl)
        {
            //BlPropertyForSale פונקציה המקבלת אוביקט מסוג
            //PropertyForSale-Dal ומחזירה אותו מומר לאוביקט מסוג
            PropertyForSale p = new PropertyForSale()
            {
                SellsId = bl.SellsId,
                PropertyArea = bl.PropertyArea,
                PropertyPrice = bl.PropertyPrice,
                PropertyId = bl.PropertyId,
                PropertyNumOfInterests = bl.PropertyNumOfInterests,
                PropertyCity = bl.PropertyCity,
                PropertyGeneralDescription = bl.PropertyGeneralDescription,
                PropertyNeighborhood = bl.PropertyNeighborhood
            };
            return p;
        }
        public BlPropertyForSale ToBl(PropertyForSale dal)
        {
            //PropertyForSale-Dal פונקציה המקבלת אוביקט מסוג
            //BlPropertyForSale ומחזירה אותו מומר לאוביקט מסוג
            BlPropertyForSale p = new BlPropertyForSale()
            {
                SellsId = dal.SellsId,
                PropertyArea = dal.PropertyArea,
                PropertyPrice = dal.PropertyPrice,
                PropertyId = dal.PropertyId,
                PropertyNumOfInterests = dal.PropertyNumOfInterests,
                PropertyCity = dal.PropertyCity,
                PropertyGeneralDescription = dal.PropertyGeneralDescription,
                PropertyNeighborhood = dal.PropertyNeighborhood,
                Sellsemail = dal.Sells.CustomerEmail
            };
            return p;
        }
        #endregion
    }
}
