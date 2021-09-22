using Core.Entities;
using Core.Entities.OrderAggregate;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
	public class ElixirHandShopDBContextSeed
	{
		public static async Task SeedAsync(ElixirHandShopDBContext context, ILoggerFactory loggerFactory)
		{
			try
			{
				//ProductsBrnads Data does not exist
				if (!context.ProductBrands.Any())
				{
					//Then go ahead and read it from the following path and store into brands variable, thanks
					var brandsData = File.ReadAllText("../Infrastructure/Data/SeedData/brands.json");

					//Now go ahead, deserialized everything you read from above path, thanks
					var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);

					foreach (var item in brands)
					{
						//iterate all the item and add them into database
						context.ProductBrands.Add(item);
					}
					//Please save them, thanks
					await context.SaveChangesAsync();
				}

				//ProductTypes Data does not exist
				if (!context.ProductTypes.Any())
				{
					//Then go ahead and read it from the following path and store into brands variable, thanks
					var typesData = File.ReadAllText("../Infrastructure/Data/SeedData/types.json");

					//Now go ahead, deserialized everything you read from above path, thanks
					var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);

					foreach (var item in types)
					{
						//iterate all the item and add them into database
						context.ProductTypes.Add(item);
					}
					//Please save them, thanks
					await context.SaveChangesAsync();
				}


				//Products Data does not exist
				if (!context.Products.Any())
				{
					//Then go ahead and read it from the following path and store into brands variable, thanks
					var productsData = File.ReadAllText("../Infrastructure/Data/SeedData/products.json");

					//Now go ahead, deserialized everything you read from above path, thanks
					var products = JsonSerializer.Deserialize<List<Product>>(productsData);

					foreach (var item in products)
					{
						//iterate all the item and add them into database
						context.Products.Add(item);
					}
					//Please save them, thanks
					await context.SaveChangesAsync();
				}


				//Products Data does not exist
				if (!context.DeliveryMethods.Any())
				{
					//Then go ahead and read it from the following path and store into brands variable, thanks
					var deliveryData = File.ReadAllText("../Infrastructure/Data/SeedData/delivery.json");

					//Now go ahead, deserialized everything you read from above path, thanks
					var deliveryMethods = JsonSerializer.Deserialize<List<DeliveryMethod>>(deliveryData);

					foreach (var item in deliveryMethods)
					{
						//iterate all the item and add them into database
						context.DeliveryMethods.Add(item);
					}
					//Please save them, thanks
					await context.SaveChangesAsync();
				}

			}
			catch (Exception ex)
			{
				var logger = loggerFactory.CreateLogger<ElixirHandShopDBContextSeed>();
				logger.LogError(ex.Message);
			}
		}
	}
}