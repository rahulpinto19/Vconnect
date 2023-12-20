const express = require("express");
const app = express();
const router = express.Router();
app.use(express.json());
const mainposts = require('../models/mainposts');
const queuedPosts = require('../models/queudeposts');
const cors = require("cors");
app.use(cors());
//pushing post into queuedpost
router.post("/data", async (req, res) => {
  var { authorid, eventname, typeofevent, link, date } = req.body;
  if (eventname.length === 0) {
    //hackathon ,job ,workshop
    if (typeofevent === "hackathon") {
      const stringArray = ["techon", "codecamp", "algofiesta"];
      const randomIndex = Math.floor(Math.random() * stringArray.length);
      eventname = stringArray[randomIndex];
    }
    if (typeofevent === "workshop") {
      eventaname = typeofevent + "workshop";
    }
    if (typeofevent === "job") {
      const stringArray = [
        "hireharbor",
        "workwave",
        "careercrafter",
        "hirehustle",
      ];
      const randomIndex = Math.floor(Math.random() * stringArray.length);
      eventname = stringArray[randomIndex];
    }
  }

  var data = new queuedPosts({
    authorid: authorid,
    eventname: eventname,
    typeofevent: typeofevent,
    link: link,
    date: date,
  });
  await data
    .save()
    .then(() => {
      res.status(200).send("data has been saved");
    })
    .catch(() => {
      res.status(201).send({ message: "the data has not been saved" });
    });
});
//accessing all the main post
router.get("/posts", async (req, res) => {
  try {
    const data = await mainposts.find();
    res.json(data);
  } catch (err) {
    res.status(500).send({ message: "Internal server issue" });
  }
});
module.exports = router;
