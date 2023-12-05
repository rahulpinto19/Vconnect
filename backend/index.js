const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
const app = express();
const auth = require("./routes/auth");
const port = 8080;
app.use(cors())
app.use(express.json());
app.use("/",auth);
app.listen(port, () => 
{
    console.log(` Backend listening at ${port}`);
});
  