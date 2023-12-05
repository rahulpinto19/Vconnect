const express = require('express');
const router = express.Router();
const user = ('../models/User.js');

router.post('/createuser',(req,res)=>
{
    res.send("ok");
})
