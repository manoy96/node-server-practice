![rocket icon](http://www.myiconfinder.com/uploads/iconsets/256-256-2779fedb06c0abc979bca2fe196347dd-rocket.png "Rocket")
# node-crud-server 
---

## Space Rockets 

### Server Deployed Via Heroku

### [Routes](routes/product.route.js)

  * "/all" -  gets all the items in the database
  * "/name/:name" - Lets you search for a rocket by name
  * "/country/:country" - Lets you filter data by country

### Adding a New Rocket

`name: {
        type: String,
        required: true,
        max: 100,
    },
    country: {
        type: String,
        required: true,
        max: 100,
    },
    price: {
        type: Number,
        required: true,
    },
    company: {
        type: String,
        required: true,
        max: 100,
    }`