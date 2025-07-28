using System;
using System.Collections.Generic;

namespace server.Models;

public partial class PropertyForSale
{
    public int SellsId { get; set; }

    public int PropertyId { get; set; }

    public int PropertyArea { get; set; }

    public string PropertyCity { get; set; } = null!;

    public string PropertyNeighborhood { get; set; } = null!;

    public int PropertyPrice { get; set; }

    public string? PropertyGeneralDescription { get; set; }

    public int PropertyNumOfInterests { get; set; }

    public virtual Customer Sells { get; set; } = null!;

    public virtual ICollection<Customer> Customers { get; set; } = new List<Customer>();
}
