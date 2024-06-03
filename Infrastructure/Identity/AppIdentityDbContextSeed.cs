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
                    DisplayName = "JonyJony",
                    Email = "jony@test.com",
                    UserName = "jony@test.com",
                    Address = new Address
                    {
                        FirstName = "Jony",
                        LastName = "Jony",
                        Street = "19 Simple Street",
                        City = "Dubai",
                        State = "No State",
                        Zipcode = "25314"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}
