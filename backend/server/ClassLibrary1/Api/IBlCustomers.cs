using BL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Api
{
    public interface IBlCustomers
    {
        BlCustomer GetById(int id);
        int GetCodeByPasswordAndName(string name,string password);
        BlCustomer GetCustomerByPasswordAndName(string name, string password);
        public List<BlPropertyForSale> GetFavoriteProperties(int customerCode);
        public Task<BlCustomer> Create(BlCustomer item);
        public Task<List<BlPropertyForSale>> AddPropertyToFavoriteList(int customerCode, int propertyCode);
        public Task<List<BlPropertyForSale>> RemovePropertyFromFavoriteList(int customerCode, int propertyCode);
    }
}
