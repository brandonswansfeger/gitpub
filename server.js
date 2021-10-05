const express = require("express")
const app = express()
require('dotenv').config();

const port = process.env.PORT;
const drinks = require("./models/drinks.js")







app.get("/drinks/", (req, res) => {
    res.render("index.ejs", {
        allDrinks: drinks,
    })
  });

  app.get("/drinks/:id", (req, res) => {
    res.render("show.ejs", {
        drink: drinks[req.params.id],
    })
  })

  app.get("./", (req, res) => {
    res.send('Welcome to the gitpub app')
  });

  app.listen(port, () => {
    console.log(`Express is listening on port:${port}`)
})