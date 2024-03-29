		Clonning the Project
		git remote add origin https://github.com/ssssage/eCommerce-Services.git

		git clone https://github.com/saeers/eCommerce-Services.git
		=======================================================
		Clone Specific Commit
		git fetch origin [paste here commit SHA] ENTER
		git checkout FETCH_HEAD ENTER
		This commit wont' be able to push back 
		Two Options are available
		1- git checkout master or
		2- git checkout -b "[new branch name]"


		Check if there is any valid certificate
		dotnet dev-certs https

		trust the certificate 
		dotnet dev-certs https -t

		To check what is installed in ASP.NET Core project
		dotnet --info

		Check if tools are installed
		dotnet tool list -g

		
		======================================================================================
		Install Node, NPM or NVM would be nice to quickly switch the version
		Though, make sure npm 6.13.0 version is installed

		Install Angular
		npm install -g @angular/cli @11.2.1

		Create New Angular App
		ng new ClientApp


		Run angular App
		ng serve

		Install BootStrap
		In ClientApp install Bootstrap
		npm install bootstarp@4.6.0


		Generate component in app
		Find help ng g c --help
		To skip tests ng g c nameOfComponent[top-nav-bar] --skip-tests
		ng g c nameOfComponent[top-nav-bar]

		Generate new module in ClientApp/src/app
		ng g m core
		ng g m store
		ng g m shared

		In store create new component name as store
		ng g c store --flat --skip-tests

		In store create new service name as store
		ng g s store --skip-tests --flat 

		In store create new module name as store-routing --flat
		ng g m store-routing --flat 

		generate new component in store
		ng g c product-item --skip-tests

		====
		New-Item -Path "~\shared" -Name "components" -ItemType "directory"
		Create new component called paging-header
		\ClientApp\src\app\shared\components> ng g c paging-header --skip-tests
		ng g c paging-header --skip-tests ==> in shared, components folder thanks

		=====To setup routing we need another module in app folder====
		ng g m home
		cd home
		ng g c home --skip-tests --flat

		cd ..
		cd store
		ng g c product-details --skip-tests



		============Front-end development app's Error Handling=====
		Inside the core create new test-error component 
		ng g c test-error --skip-tests 

		To get this component inside app-rooting module add a routes

		===More components needed inside core===============

		ng g c not-found --skip-tests

		ng g c server-error --skip-tests

		After create new folder called Interceptors
		add new file error.interceptor.ts

		Create new section-header component
		ng g c section-header --skip-tests

		Adding BreadCrumbs
		npm install --save xng-breadcrumb


		Adding toast notifications
		npm install ngx-toastr --save

		create new folder called Interceptors 
		create new file error.ts

		It is time to change the bootstrap theme
		npm install bootswatch 

		Adding loading indicators or spinners
		npm install ngx-spinner --save

		create new folder services in core and add new service called engage
		ng g s engage --flat --skip-tests

		<<<<<<< HEAD




		=======
		npm install typescript@">=3.6.4 <3.8.0"
		npm install typescript@">=4.2.3 <4.4.0"
		npm install -g typescript@3.6.4
		>>>>>>> 7ecde5f2fdc2afd6de63f31251e0980ddf6a95a1

		===================
		Inside the app
		create 
		ng g m cart
		and inside the cart create new routing module in order to lazy load
		ng g m cart-routing
		ng g c cart --flat --skip-tests
		ng g s cart --flat --skip-tests

		To setup the roots and to setup the lazyloading inside our app-routing module 

		=====================
		Further install package in client app level, this is a utility that gives unique identifier
		npm install uuid

		on installing uuid v7, import {v4 as uuidv4} from 'uuid'

		id = uuidv4();
		=========================================
		Creating new feature module at App level
		ng g m checkout
		cd checkout
		ng g m checkout-routing --flat
		ng g s checkout --flat --skip-tests
		ng g c checkout --flat --skip-tests


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

		===========================================================
		============================== Setting up Account ======================================
		at app level
		ng g m account
		cd account
		ng g m account-routing --flat
		ng g s account --flat --skip-tests
		ng g c login --skip-tests
		ng g c register --skip-tests

		============================
		At components level create new component
		ng g c text-input --skip-tests
		and then import it into shared Module
		=============================================
		At Core level add new folder called guards
		cd guards
		ng g
		ng g g auth --skip-tests
		Which interface would you like to implement 
		select CanActivate


		=====================================================
		Run migration at solution level
		dotnet-ef migrations add OrderEntityAdded -p Infrastructure -s API -c ElixirHandShopContext -o Data/Order/Migrations	