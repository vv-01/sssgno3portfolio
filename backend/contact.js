var express = require('express');
var http = require('http');
var path = require('path');
var nodemailer = require('nodemailer');
const { info } = require('console');

var app = express();
var server = http.Server(app);
var port = 500;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "")));//write the path for page

//routing
app.get("/", function(req, response) {
    response.sendFile(path.join(__dirname, ""))//write the path for page as above
})

app.post("/send_mail", function(req, response) {
    
    var from = req.body.email;
    var sub = `${req.body.subject}`;
    var mes = `Name: ${req.body.name}\nEmail: ${from}\n${req.body.message}`;
   
    var transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user : 'ssagnihotri.advisor@gmail.com',
            pass: 'hkhwwximytecbjhg'
        }
    });

    var mailOptions = {
        from : from,
        to : "ssagnihotri.advisor@gmail.com",
        subject : sub,
        text : mes
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            console.log(error);
        }
        else {
            console.log("Email sent successfully with "+ info.response);
        }
        response.redirect("/")
    })
})

//initialise web server
server.listen(port, function() {
    console.log("Starting Server on port: "+port)
})