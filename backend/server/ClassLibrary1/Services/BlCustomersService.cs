using BL.Api;
using BL.Models;
using DAL.Api;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Services
{
    public class BlCustomersService : IBlCustomers
    {
        IDal dal;

        #region c-tor

        public BlCustomersService(IDal dal)
        {
            this.dal = dal;
        }
        #endregion

        #region GetById
        public BlCustomer GetById(int id)
        {
            Customer c = dal.customers.Get().Find(x => x.CustomerId == id);
            return ToBl(c);
        }
        #endregion

        #region GetCodeByPasswordAndName
        public int GetCodeByPasswordAndName(string name, string password)

        {
            Customer c = dal.customers.Get().Find((x) => x.CustomerName == name && x.CustomerPassword == password);
            return c != null ? c.CustomerId : -1;
        }
        #endregion

        #region GetCustomerByPasswordAndName
        public BlCustomer GetCustomerByPasswordAndName(string name, string password)
        {
            int code = GetCodeByPasswordAndName(name, password);
            if (code != -1)
                return GetById(code);
            return null;
        }
        #endregion

        #region GetFavoriteProperties

        public List<BlPropertyForSale> GetFavoriteProperties(int customerCode)
        {
            var pList = dal.customers.Get().Find(x => x.CustomerId == customerCode).FavoriteProperties;
            List<BlPropertyForSale> list = new List<BlPropertyForSale>();
            foreach (var p in pList)
            {
                list.Add(PropertyForSaletoBl(p));
            }
            return list;
        }
        #endregion

       #region AddNewCustomer
        public async Task<BlCustomer> Create(BlCustomer item)
        {
            if (item.CustomerName.Length < 2)
                throw new UnValidDetailsException("customer name");
            if (IsValidEmail(item.CustomerEmail) == false)
                throw new UnValidDetailsException("customer email");
            if (item.CustomerCreditCardNumber.Length != 16)
                throw new UnValidDetailsException("customer credit card number");
            if (item.CustomerCvv.Length != 3)
                throw new UnValidDetailsException("customer cvv credit card number");
            if (item.CustomerValidThru.Length != 5)
                throw new UnValidDetailsException("customer valid thru credit card ");
            Customer c = new Customer()
            {
                CustomerId = 0,
                CustomerName = item.CustomerName,
                CustomerPassword = item.CustomerPassword,
                CustomerEmail = item.CustomerEmail,
                CustomerMonthPrice = 0,
                CustomerCreditCardNumber = item.CustomerCreditCardNumber,
                CustomerValidThru = item.CustomerValidThru,
                CustomerCvv = item.CustomerCvv
            };
            return ToBl(await dal.customers.Create(c));

        }
        #endregion

        #region AddPropertyToFavoriteListByCustomerCodeAndPropertyCode
        public async Task<List<BlPropertyForSale>> AddPropertyToFavoriteList(int customerCode, int propertyCode)
        {
            await dal.customers.AddPropertyToFavoriteList(customerCode, propertyCode);
            return GetFavoriteProperties(customerCode);

        }
        #endregion

        #region RemovePropertyFromFavoriteList
        public async Task<List<BlPropertyForSale>> RemovePropertyFromFavoriteList(int customerCode, int propertyCode)
        {
            await dal.customers.RemovePropertyFromFavoriteList(customerCode, propertyCode);
            return GetFavoriteProperties(customerCode);
        }


        #endregion

        #region IsValidEmail
        bool IsValidEmail(string email)
        {
            var trimmedEmail = email.Trim();

            if (trimmedEmail.EndsWith("."))
            {
                return false; // suggested by @TK-421
            }
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == trimmedEmail;
            }
            catch
            {
                return false;
            }
        }
        #endregion

        #region casting function


        public Customer ToDal(BlCustomer bl)
        {
            //BlCustomer פונקציה המקבלת אוביקט מסוג
            //Customer-Dal ומחזירה אותו מומר לאוביקט מסוג
            Customer c = new Customer()
            {
                CustomerId = bl.CustomerId,
                CustomerName = bl.CustomerName,
                CustomerEmail = bl.CustomerEmail,
                CustomerPassword = bl.CustomerPassword,
                CustomerMonthPrice = bl.CustomerMonthPrice,
                CustomerCreditCardNumber = bl.CustomerCreditCardNumber,
                CustomerValidThru = bl.CustomerValidThru,
                CustomerCvv = bl.CustomerCvv
            };
            return c;
        }
        public BlCustomer ToBl(Customer dal)
        {
            //Customer-Dal פונקציה המקבלת אוביקט מסוג
            //BlCustomer ומחזירה אותו מומר לאוביקט מסוג
            BlCustomer c = new BlCustomer()
            {
                CustomerId = dal.CustomerId,
                CustomerName = dal.CustomerName,
                CustomerEmail = dal.CustomerEmail,
                CustomerPassword = dal.CustomerPassword,
                CustomerMonthPrice = dal.CustomerMonthPrice,
                CustomerCreditCardNumber = dal.CustomerCreditCardNumber,
                CustomerValidThru = dal.CustomerValidThru,
                CustomerCvv = dal.CustomerCvv
                /* FavoriteProperties= dal.FavoriteProperties,*/
                /*  PropertyForSales= dal.PropertyForSales,
                  PropertiesForPurchases= dal.PropertiesForPurchases,*/
            };
            return c;
        }
        public BlPropertyForSale PropertyForSaletoBl(PropertyForSale dal)
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

