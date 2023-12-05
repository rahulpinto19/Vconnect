const connectToMongo = require("./db");
const express = require("express");
// var cors = require("cors");
const auth = require("./routes/auth");
const app = express();
const port = 8080;
app.use(express.json());
app.use("api/auth",auth);
app.listen(port, () => 
{
    console.log(`iNotebook Backend listening at ${port}`);
});
  