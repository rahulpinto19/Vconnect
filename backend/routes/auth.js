const express = require("express");
const app = express();
const router = express.Router();
const user = require("../models/user.js");
const userverification = require("../models/userVerification.js");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const cors = require("cors");
app.use(cors());
app.use(express.json());
//send otp for registration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rahulyadav252424@gmail.com",
    pass: "yfem okgh rybp sizz",
  },
});

router.post("/sendotpreg", async (req, res) => {
  const { name, email } = req.body;
  const userExist = await user.findOne({ email: email });
  if (userExist) {
    res.send({
      code: 401,
      message: "user already registered",
    });
  } else {
    const otpExist = await userverification.findOne({ email });
    if (otpExist) {
      const otp = otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
      });
      await userverification
        .updateOne({ email: email }, { $set: { otp: otp } })
        .then(() => {
          var mailOptions = {
            from: "rahulyadav252424@.com",
            to: email,
            subject: "from rahul to vinay",
            text: `this is your otp: ${otp}`,
          };
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              res.send({ code: 400, message: "OTP not sended" });
            } else {
              res.send({ code: 200, message: "OTP sent" });
            }
          });
        })
        .catch((err) => {
          console.log(err);
          res.send({ code: 404, message: "Internal server issue" });
        });
    } else {
      const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      const newuserverification = new userverification({
        name: name,
        email: email,
        otp: otp,
      });
      await newuserverification
        .save()
        .then(() => {
          var mailOptions = {
            from: "rahulyadav252424@.com",
            to: email,
            subject: "from rahul to vinay",
            text: `this is your otp: ${otp}`,
          };
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              res.send({ code: 400, message: "OTP not sended" });
            } else {
              res.send({ code: 200, message: "OTP sent" });
            }
          });
        })
        .catch((err) => {
          res.send({ code: 404, message: "internal server error" });
        });
    }
  }
});
//router:2 signup
router.post("/signup", async (req, res) => {
  const { name, email, otp, password } = await req.body;
  const Userverification = await userverification.findOne({ email });


  if (Userverification) {
    if (Userverification.otp === otp) {
      const newUser = new user({
        name: name,
        email: email,
        otp: otp,
        password: password,
      });
      newUser.save().then(() => {
        res.send({ code: 200, message: "signup done" });
      });
    } else {
      res.send({ code: 401, message: "enter the correct otp" });
    }
  } else {
    res.send({ code: 504, message: "otp expired" });
  }
});
router.post("/Login",async(req,res)=>
{
    const {email,password} = req.body;
    //email and password has been received from the front end;
    try
    {
      const userExist = await user.findOne({ email: email });
      if(userExist)
      {
        if(password===userExist.password)
        {
            res.status(200).send({message:"login successfull",password:userExist.password});
        }
        else
        {
          res.status(201).send({message:"enter wrong password"});
        }
      }
      else
      {
        res.status(401).send({message:"invalid credentials"});
      }
    }
    catch(err)
    {
      res.status(404).send({message:"internal server issue"});
    }
})
module.exports = router;
