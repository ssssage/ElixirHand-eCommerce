		********************* MIGRATIONS *******************************
		Install them 
		dotnet tool install --global dotnet-ef --version 5.0.8

		dotnet-ef -h

		How to add migration
		dotnet ef migrations add InitialCreate -o Data/Migrations

		Drop the database if exists or create new migrations in the root of the project
		dotnet ef database drop -p Infrastructure -s API/
		dotnet ef migrations remove -p Infrastructure -s API/

		To add new migration use the following command
		dotnet ef migrations add InitialCreate -p Infrastructure -s API -o Data/Migrations

		Run migration at solution level
		dotnet-ef migrations add IdentityInitial -p Infrastructure -s API -c AppIdentityDbContext -o Identity/Migrations


		********************* GIT *******************************


		git remote add origin 
		git init

		git remote add origin https://github.com/ssssage/ElixirHand.IDP.git

		git remote -v (for checking current repository)

		git add -A(add all files)

		git commit -m 'Added my project'

		git pull --rebase origin master

		git push  origin master


		============================================================================================================================
		********************* IDENTITY *******************************

		The packages are required in core project
		Install-Package Microsoft.AspNetCore.Identity.EntityFrameworkCore -Version 5.0.8 

		The packages are required in Infrastructure project
		Install-Package Microsoft.AspNetCore.Identity -Version 2.2.0
		Install-Package Microsoft.IdentityModel.Tokens -Version 6.12.0
		Install-Package System.IdentityModel.Tokens.Jwt -Version 6.12.0

		Run migration at solution level
		dotnet-ef migrations add IdentityInitial -p Infrastructure -s API -c AppIdentityDbContext -o Identity/Migrations

		On error create ==> dotnet new tool-manifest
		dotnet tool install --local dotnet-ef --version 5.0.6


		********************* IdentityServer4 *******************************
		dotnet new -i IdentityServer4.Templates
		dotnet new is4empty -n ElixirHand.IDP

		add ui to ID server
		dotnet new 

		dotnet new is4ui

		uncomment the following line of code in startup file of ID project
		//services.AddControllersWithViews();
		 //app.UseStaticFiles();
		//app.UseRouting();

		 //app.UseAuthorization();
					//app.UseEndpoints(endpoints =>
					//{
					//    endpoints.MapDefaultControllerRoute();
					//});
