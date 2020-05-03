using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class ElixirHandShopContext : DbContext
    {
        public ElixirHandShopContext(DbContextOptions<ElixirHandShopContext> options) : base(options)
        {

        }

        public DbSet<Product> Products { get; set; }
    }
}