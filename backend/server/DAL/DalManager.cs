using DAL.Api;
using DAL.Models;
using DAL.Services;

namespace DAL
{
    public class DalManager : IDal
    {
        dbcontext data=new dbcontext();
        public IDalCustomers customers { get; }

        public IDalPropertiesForSale PropertiesForSale { get; }

        public IDalPropertyForPurchase PropertiesForPurchase { get; }

 

        public DalManager()
        {
            customers = new DalCustomersService(data);
            PropertiesForSale = new DalPropertiesForSaleService(data);
            PropertiesForPurchase = new DalPropertyForPurchaseService(data);
            //FavoriteProprties=new IDalFavoritePropertiesService(data);
        }
    }
}