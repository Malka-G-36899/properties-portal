using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace DAL.Models;

public partial class dbcontext : DbContext
{
    public dbcontext()
    {
    }

    public dbcontext(DbContextOptions<dbcontext> options)
        : base(options)
    {
    }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<PropertiesForPurchase> PropertiesForPurchases { get; set; }

    public virtual DbSet<PropertyForSale> PropertyForSales { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=\"F:\\תיקייה כללית חדש\\שנה ב תשפה\\קבוצה א\\תלמידות\\malky & batya project\\project\\server\\DAL\\data\\data_base.mdf\";Integrated Security=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.CustomerId).HasName("PK__tmp_ms_x__CD65CB85329E8B35");

            entity.ToTable("customers");

            entity.Property(e => e.CustomerId).HasColumnName("customer_id");
            entity.Property(e => e.CustomerCreditCardNumber)
                .HasMaxLength(16)
                .UseCollation("SQL_Latin1_General_CP1_CI_AS")
                .HasColumnName("customer_credit_card_number");
            entity.Property(e => e.CustomerCvv)
                .HasMaxLength(3)
                .UseCollation("SQL_Latin1_General_CP1_CI_AS")
                .HasColumnName("customer_cvv");
            entity.Property(e => e.CustomerEmail)
                .HasMaxLength(20)
                .UseCollation("SQL_Latin1_General_CP1_CI_AS")
                .HasColumnName("customer_email");
            entity.Property(e => e.CustomerMonthPrice).HasColumnName("customer_month_price");
            entity.Property(e => e.CustomerName)
                .HasMaxLength(15)
                .UseCollation("SQL_Latin1_General_CP1_CI_AS")
                .HasColumnName("customer_name");
            entity.Property(e => e.CustomerPassword)
                .HasMaxLength(10)
                .UseCollation("SQL_Latin1_General_CP1_CI_AS")
                .HasColumnName("customer_password");
            entity.Property(e => e.CustomerValidThru)
                .HasMaxLength(5)
                .UseCollation("SQL_Latin1_General_CP1_CI_AS")
                .HasColumnName("customer_valid_thru");

            entity.HasMany(d => d.FavoriteProperties).WithMany(p => p.Customers)
                .UsingEntity<Dictionary<string, object>>(
                    "FavoriteProperty",
                    r => r.HasOne<PropertyForSale>().WithMany()
                        .HasForeignKey("PropertyId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__favorite___prope__403A8C7D"),
                    l => l.HasOne<Customer>().WithMany()
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__favorite___custo__3F466844"),
                    j =>
                    {
                        j.HasKey("CustomerId", "PropertyId").HasName("PK__favorite__EA5071C3F717D98F");
                        j.ToTable("favorite_properties");
                        j.IndexerProperty<int>("CustomerId").HasColumnName("customer_id");
                        j.IndexerProperty<int>("PropertyId").HasColumnName("property_id");
                    });
        });

        
        
        
        
        
        
        
        modelBuilder.Entity<PropertiesForPurchase>(entity =>
        {
            entity.HasKey(e => e.PropertyForPurchaseId);

            entity.ToTable("properties_for_purchase");

            entity.Property(e => e.PropertyForPurchaseId).HasColumnName("propertyForPurchaseId");
            entity.Property(e => e.City)
                .HasMaxLength(12)
                .UseCollation("SQL_Latin1_General_CP1_CI_AS")
                .HasColumnName("city");
            entity.Property(e => e.MaxAreaProperty).HasColumnName("max_area_property");
            entity.Property(e => e.MaxPrice).HasColumnName("max_price");
            entity.Property(e => e.MinAreaProperty).HasColumnName("min_area _property");
            entity.Property(e => e.PurchaserId).HasColumnName("purchaser_Id");

            entity.HasOne(d => d.Purchaser).WithMany(p => p.PropertiesForPurchases)
                .HasForeignKey(d => d.PurchaserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__propertie__purch__3B75D760");
        });

        modelBuilder.Entity<PropertyForSale>(entity =>
        {
            entity.HasKey(e => e.PropertyId).HasName("PK__property__735BA4636204B960");

            entity.ToTable("property_for_sale");

            entity.Property(e => e.PropertyId).HasColumnName("property_id");
            entity.Property(e => e.PropertyArea).HasColumnName("property_area");
            entity.Property(e => e.PropertyCity)
                .HasMaxLength(12)
                .UseCollation("SQL_Latin1_General_CP1_CI_AS")
                .HasColumnName("property_city");
            entity.Property(e => e.PropertyGeneralDescription)
                .HasMaxLength(50)
                .UseCollation("SQL_Latin1_General_CP1_CI_AS")
                .HasColumnName("property_general_description");
            entity.Property(e => e.PropertyNeighborhood)
                .HasMaxLength(12)
                .UseCollation("SQL_Latin1_General_CP1_CI_AS")
                .HasColumnName("property_neighborhood");
            entity.Property(e => e.PropertyNumOfInterests).HasColumnName("property_num_of_interests");
            entity.Property(e => e.PropertyPrice).HasColumnName("property_price");
            entity.Property(e => e.SellsId).HasColumnName("sells_id");

            entity.HasOne(d => d.Sells).WithMany(p => p.PropertyForSales)
                .HasForeignKey(d => d.SellsId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__property___sells__398D8EEE");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
