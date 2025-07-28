using BL.Api;
using BL.Services;
using DAL;
using DAL.Api;

namespace BL

{
    public class BlManager : IBl
    {
        public IBlCustomers blCustomers { get; }

        public IBlPropertiesForSale blPropertiesForSale { get; }

        public IBlPropertiesForPurchase blPropertiesForPurchase { get; }

        #region c-tor
        public BlManager()
        {
            IDal dal = new DalManager();
            blCustomers = new BlCustomersService(dal);
            blPropertiesForSale = new BlPropertiesForSaleService(dal);
            blPropertiesForPurchase=new BlPropertyForPurchaseService(dal);
        }
        #endregion
    }
}