using BL.Api;
using BL.Models;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class PropertiesForSaleController : Controller
    {
        IBlPropertiesForSale propertiesForSale;

        #region c-tor
        public PropertiesForSaleController(IBl manager)
        {
            propertiesForSale = manager.blPropertiesForSale;
        }
        #endregion

        #region GetPropertiesForSellByCustomerCode
        [HttpGet("GetPropertiesForSellByCustomerCode/{customerCode}")]
        public  List<BlPropertyForSale> GetPropertiesForSellByCustomerCode(int customerCode)
        {
            return propertiesForSale.GetPropertiesForSellByCustomerCode(customerCode);
        }
        #endregion

        #region AddPropertiesForPurchaseByCustomerCode
        [HttpPost("AddPropertiesForSaleByCustomerCode/{price}")]
        public List<BlPropertyForSale> AddPropertiesForsaleByCustomerCode([FromBody] BlPropertyForSale p, int price)
        {
            return  propertiesForSale.AddPropertiesForSaleByCustomerCode(p, price).Result;
        }
        #endregion

        #region RemovePropertyByCode
        [HttpDelete("RemovePropertyByCode/{propertyCode}/{price}")]
        public List<BlPropertyForSale> RemovePropertyByCode(int propertyCode, int price)
        {
            return propertiesForSale.RemovePropertyByCode(propertyCode,price).Result;

        }
        #endregion

        #region GetPropertiesForSaleByPropertyCode

        [HttpGet("GetPropertiesForSaleByPropertyCode/{propertyCode}")]
        public List<BlPropertyForSale> GetPropertiesForSaleByPropertyCode(int propertyCode)
        {
            return propertiesForSale.GetPropertiesForSaleByPropertyCode(propertyCode);
        }
        #endregion

        #region updateProperty
        [HttpPut("updateProperty")]
        public List<BlPropertyForSale> UpdateProperty([FromBody] BlPropertyForSale p)
        {
            return propertiesForSale.UpdateProperty(p).Result;
        }
        #endregion
    }
}
