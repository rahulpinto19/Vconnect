const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());
const updates = require('../models/updates');
const cors = require("cors");
app.use(cors());
router.post("/data",async(req,res)=>
{
   
    var {authorid,eventname,typeofevent,link} = req.body;
  if((eventname.length===0))
    {
        //hackathon ,job ,workshop
        if(typeofevent === "hackathon")
        {
            const stringArray = ["techon","codecamp","algofiesta"];
            const randomIndex = Math.floor(Math.random() * stringArray.length);
            eventname = stringArray[randomIndex]
        }
        if(typeofevent === "workshop")
        {
            eventaname = typeofevent + "workshop"
        }
        if(typeofevent === "job")
        {
            const stringArray = ["hireharbor","workwave","careercrafter","hirehustle"];
            const randomIndex = Math.floor(Math.random() * stringArray.length);
            eventname = stringArray[randomIndex]
        }
    }
    
    var data = new updates({
        authorid:authorid,
        eventname:eventname,
        typeofevent:typeofevent,
        link:link
    })
    await data.save()
    .then(()=>{res.send(data)})
    .catch(()=>
    {
        res.status(201).send({message:"the data has not been saved"});
    })
})
module.exports = router