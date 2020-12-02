// console.log('Hey JS')

var express = require('express');
var path = require('path'); // Used to simplify paths || Core Node Js Module || No need to install
var ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();
var router = require('./routes.js')
var nodemailer = require('nodemailer');




app.use('/', router);
// parse application/x-www-form-urlencoded

// Body Parser
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.set('view-engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.listen(3000, function () { // listen method with callback
    console.log('Server Started on Port 3000')
});

// Set static resources
app.use(express.static(path.join(__dirname, 'public')))


app.post('/requestForProposal',  (req, res)=> {
    const output = `
    <p>You have a new proposal request</p>
    <ul>
        <li>Client Name: ${req.body.Username}</li>
        <li>Mobile Number: ${req.body.mobileNumber}</li>
        <li>Email Address: ${req.body.email}</li>
        <li>Business Name and Location: ${req.body.businessNameAndLocation}</li>
        <li>No. of License: ${req.body.licenseNumber}</li>
        <li>Additional Content: ${req.body.AdditionalFormInfo}</li>
        <li>Time of Request: ${new Date()}</li>
    </ul>
    `

    var transporter = nodemailer.createTransport({
        host: 'mail.asarramofh.com',
        port: 465,
        secure: true,
        auth: {
            user: 'prospects@asarramofh.com',
            pass: 'asarfocus2020Sucess'
        }/* ,
        tls: {
            rejectUnauthorized: false
        } */
      
    });


    var mailOptions = {
        from: 'prospects@asarramofh.com',
        to: 'ellisotoo@gmail.com, brandexcelnow@gmail.com',
        subject: 'New AsarRamofh Prospect',
        text: `${output}`,
        html: output
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.render('quickbooksCampaignSuccess.ejs',
    {
        successMsg: 'Mail has been Sent!',
        foo: "bar"
    } );

    // res.send('Thank you')
}) 


function handleMailRequest(req, res) {
    console.log(req.body)
    const output = `
<p>You have a new newsletter request</p>
<ul>
    <li>${req.body.name}</li>
    <li>${req.body.email}</li>
    <li>${new Date()}</li>
</ul>
`

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'ellisotoo@gmail.com',
            pass: 'thinkglobal11a'
        }
        /*    host: 'server213.web-hosting.com',
           port: 465,
           secure: true,
           auth: {
               user: 'ellis@asarramofh.com',
               pass: 'thinkglobal'
           } */
    });


    var mailOptions = {
        from: 'ellis@asarramofh.com',
        to: 'brandexcelnow@gmail.com',
        subject: 'New Asar Ramofh Contact',
        text: `${output}`,
        html: output
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.render('index.ejs');
    // console.log(output)
}

app.post('/contact', function (req, res) {
    console.log(req.body)
    const output = `
<p>You have a new contact request</p>
<ul>
    <li>${req.body.name}</li>
    <li>${req.body.email}</li>
    <li>${req.body.subject}</li>
    <li>${req.body.message}</li>
    <li>${new Date()}</li>
</ul>   
`

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'ellisotoo@gmail.com',
            pass: 'thinkglobal11a'
        }
        /*    host: 'server213.web-hosting.com',
           port: 465,
           secure: true,
           auth: {
               user: 'ellis@asarramofh.com',
               pass: 'thinkglobal'
           } */
    });


    var mailOptions = {
        from: 'ellis@asarramofh.com',
        to: 'brandexcelnow@gmail.com',
        subject: 'New Asar Ramofh Contact',
        text: `${output}`,
        html: output
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.render('contactUs.ejs');
    // console.log(output)
});



app.post('/send', handleMailRequest)