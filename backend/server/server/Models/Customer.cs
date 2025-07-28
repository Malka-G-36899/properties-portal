using System;
using System.Collections.Generic;

namespace server.Models;

public partial class Customer
{
    public int CustomerId { get; set; }

    public string CustomerName { get; set; } = null!;

    public string CustomerCreditCardNumber { get; set; } = null!;

    public string CustomerCvv { get; set; } = null!;

    public string CustomerValidThru { get; set; } = null!;

    public int CustomerMonthPrice { get; set; }

    public string CustomerEmail { get; set; } = null!;

    public string CustomerPassword { get; set; } = null!;

    public virtual ICollection<PropertiesForPurchase> PropertiesForPurchases { get; set; } = new List<PropertiesForPurchase>();

    public virtual ICollection<PropertyForSale> PropertyForSales { get; set; } = new List<PropertyForSale>();

    public virtual ICollection<PropertyForSale> Properties { get; set; } = new List<PropertyForSale>();
}
