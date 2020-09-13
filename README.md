# ElixirHand-Seller-Services
ElixirHand-Seller is complete e-Commerce open source project using Angular as a front end and ASP.NET Core as a Back end for the selling products. 


# Technologies are used for the back end development
For backend development we used Web APIs, SQL Database and Entity framework core.


# Technologies are used for the front end development
Entire front end development is based on Angular

# Project Description
This project is built upon restful web api using asp.net core that access the database using Entity Framework Core along with Angular as a user facing site to sell and buy products. This project have multiple features like getting resources from web api and manipulate them, built in dependency injection system configuration, logger, working with environments variables, middleware, configuration files and EF core features for example migrations and seeding the database.  


# SSL Certificate 
Initially when you run the project to call Get method it will not run in postman because of SSL issue.
In postman disable the SSL Certificate verification

However on running the following command dotnet dev-certs https
You will see an out put "A Valid HTTPS certificate is already present"

To see what options are available run the following command dotnet dev-certs https -h  and then dotnet dev-certs https -t

 