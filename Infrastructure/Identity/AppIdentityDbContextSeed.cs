using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Sabir",
                    Email = "sabir@test.com",
                    UserName = "sabir@test.com",
                    Address = new Address
                    {
                        FirstName = "Sabir",
                        LastName = "Khan",
                        Street = "13 Big Bridge",
                        City = "Pakistan",
                        State = "PK",
                        Zipcode = "53003"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}
