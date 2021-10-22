const express = require("express")
const app = express()
require('dotenv').config();

const port = process.env.PORT;
const drinks = require("./models/drinks.js")
const food = require("./models/food.js")


app.get("/drinks/", (req, res) => {
    res.render("index.ejs", {
        allDrinks: drinks,
    })
  });

app.get("/food/", (req, res) => {
  res.render("food_index.ejs", {
      allFood: food,
  })
});


  app.get("/drinks/:id", (req, res) => {
    res.render("show.ejs", {
        drink: drinks[req.params.id],
    })
  })

  app.get("/food/:id", (req, res) => {
    res.render("food_show.ejs", {
        food: food[req.params.id],
    })
  })


  app.get("./", (req, res) => {
    res.send('welcome to gitpub')
  });

  app.listen(port, () => {
    console.log(`Express is listening on port:${port}`)
})