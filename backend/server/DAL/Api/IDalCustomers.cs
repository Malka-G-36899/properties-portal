using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Api
{
    public interface IDalCustomers
    {
        List<Customer> Get();
        Task AddPropertyToFavoriteList(int customerCode,int propertyCode);
        Task RemovePropertyFromFavoriteList(int customerCode, int propertyCode);
        Task<Customer> Create(Customer customer);
        void UpdateMonthPrice(int customerCode,int price);
       


    }
}
