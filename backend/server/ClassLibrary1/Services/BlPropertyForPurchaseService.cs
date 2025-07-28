using BL.Api;
using BL.Models;
using DAL.Api;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Services
{
    public class BlPropertyForPurchaseService : IBlPropertiesForPurchase
    {
        //IDal dal;
        IDalPropertyForPurchase propertyForPurchase;
        IDalCustomers customers;

        #region c-tor
        public BlPropertyForPurchaseService(IDal dal)
        {
            this.propertyForPurchase = dal.PropertiesForPurchase;
            this.customers = dal.customers;
            // this.dal = dal;
        }
        #endregion

        #region GetPropertiesForPurchaseByCustomerCode
        public List<BlPropertyForPurchase> GetPropertiesForPurchaseByCustomerCode(int customerCode)
        {
            var cList = propertyForPurchase.Get();
            List<BlPropertyForPurchase> list = new List<BlPropertyForPurchase>();
            foreach (var c in cList)
            {
                if (c.PurchaserId == customerCode)
                    list.Add(ToBl(c));
            }
            return list;

        }
        #endregion

        #region AddPropertiesForPurchaseByCustomerCode
        public async Task<List<BlPropertyForPurchase>> AddPropertiesForPurchaseByCustomerCode(BlPropertyForPurchase p, int price)
        {
            // בדיקות תקינות
            PropertiesForPurchase dp = new PropertiesForPurchase()
            {
                PurchaserId = p.PurchaserId,
                MinAreaProperty = p.MinAreaProperty,
                MaxAreaProperty = p.MaxAreaProperty,
                City = p.City,
                MaxPrice = p.MaxPrice,
                PropertyForPurchaseId = p.PropertyForPurchaseId
            };
            await propertyForPurchase.Create(dp);
            customers.UpdateMonthPrice(p.PurchaserId, price);
            return GetPropertiesForPurchaseByCustomerCode(p.PurchaserId);
        }
        #endregion

        #region RemovePropertyByCode
        public async Task<List<BlPropertyForPurchase>> RemovePropertyByCode(int propertyCode, int price)
        {
            int code = await propertyForPurchase.RemovePropertyByCode(propertyCode);
            if (code != -1)
            {
                customers.UpdateMonthPrice(code, price * -1);
                return GetPropertiesForPurchaseByCustomerCode(code);
            }
            else
                return null;
        }

        #endregion

        #region UpdateProperty
        public async Task<List<BlPropertyForPurchase>> UpdateProperty(BlPropertyForPurchase p)
        {
            await  propertyForPurchase.UpdateProperty(ToDal(p));
            return GetPropertiesForPurchaseByCustomerCode(p.PurchaserId);
        }
        #endregion

        #region casting function
        public PropertiesForPurchase ToDal(BlPropertyForPurchase bl)
        {
            //BlPropertyForPurchase פונקציה המקבלת אוביקט מסוג
            //PropertyForPurchase-Dal ומחזירה אותו מומר לאוביקט מסוג
            PropertiesForPurchase p = new PropertiesForPurchase()
            {
                PurchaserId = bl.PurchaserId,
                MinAreaProperty = bl.MinAreaProperty,
                MaxAreaProperty = bl.MaxAreaProperty,
                City = bl.City,
                MaxPrice = bl.MaxPrice,
                PropertyForPurchaseId = bl.PropertyForPurchaseId
            };
            return p;
        }
        public BlPropertyForPurchase ToBl(PropertiesForPurchase dal)
        {
            //PropertyForSale-Dal פונקציה המקבלת אוביקט מסוג
            //BlPropertyForSale ומחזירה אותו מומר לאוביקט מסוג
            BlPropertyForPurchase p = new BlPropertyForPurchase()
            {
                PurchaserId = dal.PurchaserId,
                MinAreaProperty = dal.MinAreaProperty,
                MaxAreaProperty = dal.MaxAreaProperty,
                City = dal.City,
                MaxPrice = dal.MaxPrice,
                PropertyForPurchaseId = dal.PropertyForPurchaseId

            };
            return p;
        }
        #endregion


    }
}
