using Core.Entities;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Infrastructure.Data
{
    public class ElixirHandShopContext : DbContext
    {
        public ElixirHandShopContext(DbContextOptions<ElixirHandShopContext> options) : base(options)
        {

        }

        public DbSet<Product> Product { get; set; }
        public DbSet<ProductBrand> ProductBrand { get; set; }
        public DbSet<ProductType> ProductType { get; set; }

        //Here we areapplying Product Configuration on migration
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }


    }
}