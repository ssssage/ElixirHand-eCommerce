using System;
using System.Threading.Tasks;
using Infrastructure.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            // CreateHostBuilder to a variable called host
            var host = CreateHostBuilder(args).Build();

            //Accessing the datacontext class called ElixirHandShopContext
            //Whatever runs inside using will be disposed autometically 
            using (var scope = host.Services.CreateScope())
            {
                //Accessing the services and resolve dependencies from the scope
                var services = scope.ServiceProvider;

                //IloggerFactory will allow to create instances of the Lgger class
                var loggerFactory = services.GetRequiredService<ILoggerFactory>();
                try
                {
                    var context = services.GetRequiredService<ElixirHandShopContext>();
                    await context.Database.MigrateAsync();
                    await ElixirHandShopContextSeed.SeedAsync(context, loggerFactory);
                }
                catch (Exception ex)
                {
                    var logger = loggerFactory.CreateLogger<Program>();
                    logger.LogError(ex, "An error occured during migration");
                    Console.WriteLine(ex.InnerException.Message);
                }
            }

            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
