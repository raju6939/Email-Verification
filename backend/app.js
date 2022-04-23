const express=require('express');
const bodyparser=require('body-parser');
const nodemailer=require('nodemailer');
const connectDatabase = require('./database');
const { default: mongoose } = require('mongoose');
const cors = require("cors");
const app=express();
app.use(cors());

// body parser middleware
app.use(express.json());
connectDatabase();
//static folder

app.get('/',function(req,res){
    res.send("Node.js 2 way authentication");
});

//defining port
const PORT=process.env.PORT||1234;
app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
})

var email;

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service : 'Gmail',
    
    auth: {
      user: 'nagarajumakam6939@gmail.com',
      pass: '9652091401mM@',
    }
    
});

var globalOtp;

function createOtp(){
    var otp = Math.random();
    otp = otp * 1000000;
    otp = parseInt(otp);
    globalOtp = otp;
    return otp;
}

app.post('/send',function(req,res){
    email=req.body.email;
    curentOtp = createOtp();
     // send mail with defined transport object
    var mailOptions={
        to: req.body.email,
       subject: "Otp for registration is: ",
       html: "<h3>OTP for account verification is </h3>"  + "<h1 style='font-weight:bold;'>" + this.curentOtp +"</h1>" // html body
     };
     
     transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send("Couldn't send OTP");
            return console.log(error);
        }
        res.send(""+curentOtp);
    });
});

//Creating a User Model
const model = mongoose.model('User', new mongoose.Schema({ name: String, email: String, password: String}));


app.post("/save",(req,res)=>{
    let email = req.body.email;
    let password = req.body.password
    let name = req.body.name
    insertModel = new model({name, email, password});
    insertModel.save((err,data)=>{
        if(err){
            console.log('User already exists');
            res.send("No")
        }
        else 
            res.send("Yes");
    })
})
