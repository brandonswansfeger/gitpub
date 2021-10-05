const express = require("express")
const app = express()
require('dotenv').config();

const port = process.env.PORT;
const drinks = require("./models/drinks.js")



app.get("./", (req, res) => {
    res.send('Welcome to the gitpub app')
  });


app.get("/drinks/", (req, res) => {
    res.render("index.ejs")
  });



app.listen(port, () => {
    console.log(`Express is listening on port:${port}`)
});