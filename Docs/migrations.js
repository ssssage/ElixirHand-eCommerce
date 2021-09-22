Install them 
		dotnet tool install --global dotnet-ef --version 5.0.8

		dotnet-ef -h

		How to add migration
		dotnet ef migrations add InitialCreate -o Data/Migrations

		Drop the database if exists or create new migrations in the root of the project
		dotnet ef database drop -p Infrastructure -s API -c Infrastructure.Data.ElixirHandShopDBContext


		dotnet ef migrations remove -p Infrastructure -s API -c Infrastructure.Data.ElixirHandShopDBContext


		To add new migration use the following command
		dotnet ef migrations add InitialCreate -p Infrastructure -s API -c Infrastructure.Data.ElixirHandShopDBContext -o Data/Migrations

		dotnet ef database update -p Infrastructure -s API -c Infrastructure.Data.ElixirHandShopDBContext


		Setting up Redis
		Install nuget package StackExchange 


		Installing Redis on Windows: 
		Step 1: Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
		Step 2: choco install redis-64
		choco uninstall redis-64
		choco uninstall memurai-developer.install v2.0.3
		Run the Server: Redis-Server.exe
		redis-cli.exe KEYS '*'
		Check if redis contains data in cart
		https://localhost:5001/api/cart?id=cart1

		Add new cart data
		{
			"id": "cart1",
			"items": [
			{
				"id": 17,
					"name": "Angular Purple Boots",
					"price": 150,
				"quantity": 1,
					"pictureUrl": "https://localhost:5001/images/products/boot-ang2.png",
					"productType": "Boots",
					"productBrand": "Angular"

			}
			]

		}

		type quit when to stop redis
		Or redis-cli
		shutdown
		
		=========Validate certificate===========
		Creating WEB API Project and Solution and adding them

This command will show what help is available at that level
dotnet -h 


  1.Create new solution
  First Open cmd in folder projectfolder
  dotnet new sln

  2.Create new WebApi Project
  dotnet new webapi -o projectfolder
  
  3. Add WebApi project into solution
  dotnet sln add projectfolder
  
  4. Validate certificat
  dotnet dev-certs https
  dotnet dev-certs https -h
  dotnet dev-certs https -t
  dotnet sln list
  
  
  ======================================= Add new Migrations ======================
	dotnet-ef migrations add SqlDbInitial -p Infrastructure -s API -c ElixirHandShopSQLDBContext -o Data/Migrations
	
	To undo this action, use 'ef migrations remove'
	
	dotnet ef database update -p Infrastructure -s API -c ElixirHandShopSQLDBContext
	
	
	======================================= Add new Migrations ======================
	
	dotnet ef migrations add OrederEntityInitial -p Infrastructure -s API -c ElixirHandShopDBContext
	
	dotnet ef database drop -p Infrastructure -s API -c ElixirHandShopDBContext