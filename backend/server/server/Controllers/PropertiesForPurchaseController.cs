using BL.Api;
using BL.Models;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class PropertiesForPurchaseController : Controller
    {
        IBlPropertiesForPurchase PropertiesForPurchase;

        #region c-tor
        public PropertiesForPurchaseController(IBl manager)
        {
            PropertiesForPurchase = manager.blPropertiesForPurchase;
        }
        #endregion

        #region GetPropertiesForPurchaseByCustomerCode
        [HttpGet("GetPropertiesForPurchaseByCustomerCode/{customerCode}")]
        public List<BlPropertyForPurchase> GetPropertiesForPurchaseByCustomerCode(int customerCode)
        {
            return PropertiesForPurchase.GetPropertiesForPurchaseByCustomerCode(customerCode);
        }
        #endregion

        #region AddPropertiesForPurchaseByCustomerCode
        [HttpPost("AddPropertiesForPurchaseByCustomerCode/{price}")]
        public List<BlPropertyForPurchase> AddPropertiesForPurchaseByCustomerCode([FromBody] BlPropertyForPurchase p,int price)
        {
            return PropertiesForPurchase.AddPropertiesForPurchaseByCustomerCode(p,price).Result;
        }
        #endregion

        #region RemovePropertyByCode
        [HttpDelete("RemovePropertyByCode/{propertyCode}/{price}")]
        public List<BlPropertyForPurchase> RemovePropertyByCode(int propertyCode,int price)
        {
            return PropertiesForPurchase.RemovePropertyByCode(propertyCode,price).Result;

        }
        #endregion

        #region UpdateProperty
        [HttpPut("UpdateProperty")]
        public List<BlPropertyForPurchase> UpdateProperty([FromBody] BlPropertyForPurchase p)
        {
            return PropertiesForPurchase.UpdateProperty(p).Result;
        }
        #endregion
    }
}
