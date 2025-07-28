using System;
using System.Collections.Generic;

namespace DAL.Models;

public partial class PropertiesForPurchase
{
    public int PurchaserId { get; set; }

    public int MinAreaProperty { get; set; }

    public int MaxAreaProperty { get; set; }

    public string City { get; set; } = null!;

    public int MaxPrice { get; set; }

    public int PropertyForPurchaseId { get; set; }

    public virtual Customer Purchaser { get; set; } = null!;
}
