const express = require("express")
const app = express()
require('dotenv').config();

const port = process.env.PORT;




app.get("./", (req, res) => {
    res.send('Welcome to the gitpub app')
  });





app.listen(port, () => {
    console.log(`Express is listening on port:${port}`)
});