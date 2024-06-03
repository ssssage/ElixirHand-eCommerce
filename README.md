# ElixirHand .NET 6 and Angular 15 
   ElixirHand-eCommerce is an open-source ongoing e-Commerce project based on Angular, Bootstrap, SASS, TypeScript, and ASP.NET Core WEB API.
   
# Recent Update
   It has been updated to .NET 6 from ASP.NET Core 3.1 and we have switched the databases from Sqlite to PostgreSQL.

# Project Description
  This project is built upon restful web api using .NET 6 that access the database using Entity Framework Core. 
  Endpoints are consumed by a angular based Client App and it has e-commerce store features.
  
  Multiple databases are being used including Redis, PostgreSQL, via Docker. ElixirHand is SSL Certified. 

# Docker 
  There is a docker-compose.yml file exists in the root folder of the project. Once cloned etc, navigate to the project's root folder open terminal and
  run the following command docker-compose up -d to run PostgreSQL, Redis etc inside the docker container. 
  Make sure docker is installed or you can install PostgreSQL and redis locally. [Docker Compose File ](https://github.com/ssssage/ElixirHand-eCommerce/blob/master/docker-compose.yml/).

# Stripe
  Stripe is used to test payment functionality. You need your own stripe key etc to test the payment functionality. 
  Use stripe key etc in [appsettings.json](https://github.com/ssssage/ElixirHand-eCommerce/blob/master/API/appsettings.json).
  
# How to run the project and test
  * Navigate to API directory and open terminal and type dotnet run. (Make sure .NET 6 runtime and SDK is already installed either locally or on docker)
  * Navigate to ClientApp directory inside the FrontentApp and open terminal and type ng serve command and hit enter
    (Make sure Angular CLI: 15.2.6, Node: 18.20.2, and NPM: npm 10.5.0) already installed 
  
  # Technologies
  For backend development we used 
  * C#, HTML, SASS, Bootstrap, TypeScript, JavaScript, JSON, SQL
  * ASP.NET CORE APIs, Dependency Injection 
  * NodeJs, Node: 18.20.2
  * NPM: npm 10.5.0
  * Angular framework => Angular CLI: 15.2.6
  * Web APIs
  * PostgreSQL, Redis Database
  * Entity framework core
  * Identity for login and registration
  * Automapper
  * Lazy Loading
  * Angular Reactive forms
  * Paging, Sorting, Searching and Filtering
  * Redis to store the shopping cart
  * Orders from shopping cart
  * Payments Handling via Stripe (new EU standards and 3D secure)
  * An much more
  
