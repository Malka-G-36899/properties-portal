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
    public class DalCustomersService : IDalCustomers
    {
        dbcontext dbcontext;

       #region c-tor
        public DalCustomersService(dbcontext dbcontext)
        {
            this.dbcontext = dbcontext;
        }
        #endregion

       #region Get
        public List<Customer> Get()
        {
            return dbcontext.Customers.Include(x => x.FavoriteProperties).ToList();
        }
        #endregion

       #region AddNewCustomer
        public async Task<Customer> Create(Customer item)
        {
            var c = dbcontext.Customers.Add(item);
            await dbcontext.SaveChangesAsync();
            Console.WriteLine(c.Entity.CustomerId);
            return c.Entity;
        }
        #endregion

       #region AddPropertyToFavoriteList
        public async Task AddPropertyToFavoriteList(int customerCode, int propertyCode)
        {
            Customer c = dbcontext.Customers.Include(x => x.FavoriteProperties).ToList().Find(x => x.CustomerId == customerCode);
            PropertyForSale p = dbcontext.PropertyForSales.Include(x => x.Sells).ToList().Find(x => x.PropertyId == propertyCode);
            if (p != null && c != null)
            {
                p.PropertyNumOfInterests++;
                c.FavoriteProperties.Add(p);
                await dbcontext.SaveChangesAsync();
            }
        }

        #endregion

       #region removePropertyFromFavoriteList
        public async Task RemovePropertyFromFavoriteList(int customerCode, int propertyCode)
        {
            Customer c = dbcontext.Customers.Include(x => x.FavoriteProperties).ToList().Find(x => x.CustomerId == customerCode);
            PropertyForSale p = dbcontext.PropertyForSales.Include(x => x.Sells).ToList().Find(x => x.PropertyId == propertyCode);
            if (p != null && c != null)
            {
                c.FavoriteProperties.Remove(p);
                await dbcontext.SaveChangesAsync();
            }
        }
        #endregion

       #region updateMonthPrice
        public void UpdateMonthPrice(int customerCode, int price)
        {
            dbcontext.Customers.ToList().Find(x => x.CustomerId == customerCode).CustomerMonthPrice += price;
            dbcontext.SaveChanges();
        }
        #endregion

       #region updateCustomer
        public void Update(Customer item)
        {
            Customer c = dbcontext.Customers.Find(item);

            dbcontext.SaveChanges();
        }
        #endregion

    }
}
