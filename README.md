![rocket icon](http://www.myiconfinder.com/uploads/iconsets/256-256-2779fedb06c0abc979bca2fe196347dd-rocket.png "Rocket")
# node-crud-server 
---

## Space Rockets 

### Server Deployed Via Heroku

### [Routes](routes/product.route.js)

  * "/all" -  gets all the items in the database
  * "/name/:name" - Lets you search for a rocket by name
  * "/country/:country" - Lets you filter data by country

### POST a New Rocket Via Postman

Name: "Rocket Name" 

Price: "Rocket Price"

Company: "Company Name"

Country "Country of Origin"

![Postman reference](img/postman.png)

### UPDATE Rocket Data Via Postman

"https://sleepy-taiga-70117.herokuapp.com/products/<b>:productID</b>/update"

### DELETE Rocket Data Via Postman

"https://sleepy-taiga-70117.herokuapp.com/products/<b>:productID</b>/delete"