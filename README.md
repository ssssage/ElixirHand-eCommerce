# ElixirHand-Seller-Services
ElixirHand-Seller is complete e-Commerce open source project using Angular as a front end and ASP.NET Core as a Back end for the selling products. 


# Technologies are used for the back end development
For backend development we used Web APIs, SQL Database and Entity framework core.


# Technologies are used for the front end development
Entire front end development is based on Angular

# Project Description
This project is built upon restful web api using asp.net core that access the database using Entity Framework Core along with Angular as a user facing site to sell and buy products. This project have multiple features like getting resources from web api and manipulate them, built in dependency injection system configuration, logger, working with environments variables, middleware, configuration files and EF core features for example migrations and seeding the database.  

# Project clonning 
git clone https://github.com/elixirhand/ElixirHand-Seller-Services.git


# Push code
git remote add origin https://github.com/elixirhand/ElixirHand-Seller-Services.git
git push origin branchname

# SSL Certificate 
Initially when you run the project to call Get method it will not run in postman because of SSL issue.
In postman disable the SSL Certificate verification

However on running the following command dotnet dev-certs https
You will see an out put "A Valid HTTPS certificate is already present"

To see what options are available run the following command dotnet dev-certs https -h  and then dotnet dev-certs https -t


# Recreating Migrations
In case you want to use your own database or you dont want existing database then recreate migrations by following simple steps
Step 1 ==> at solutions level use the the following command to drop the database
dotnet ef database -p Infrastructure -s API

Step 2 ==> Remove the existing migrations
dotnet ef migrations remove -p Infrastructure -s API

Step 3 ==> Add new migration
dotnet ef migrations add -p Infrastructure -s API -o Data/Migrations

# Frontend App
We have added client project based 
Angular CLI: 10.1.6
Node: 12.19.0
OS: win32 x64
bootstrap >=4.3.1

Initially we added some components for example To Nav Bar Component

# General commands
General commands that we have used so far.
After installing the node
To create new angular app
npm install -g @angular/cli
ng new FrontendApp

Or you can create Angular app using visual studio

//To run the angular project use command line and run the following command
ng serve  or use visual studio or dotnet run command


//To stop 
ctrl c

To kill the processor
netstat -ano | findstr :portnumber

taskkill /PID portnumber /F

# ADding fonts and Bootstrap
ng add ngx-bootstrap for installing
npm install font-awesome


# Generate new Component 
to generate new component

ng g
ng g component name oftheComponent
or ng g c top-nav-bar --skip-tests

# Help at component level
ng g c --help




































 
