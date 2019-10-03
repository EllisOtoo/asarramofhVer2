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
/* 
    app.get('/', function (req, res) {
        res.send('Welcome')
}); */



app.get('/accounting', function (resp, res) {
    res.render('accounting.ejs')
});

app.get('/sample', function (resp, res) {
    res.render('sample.ejs');
});


app.post('/test', function (req, res) {
    setTimeout(() => {
        console.log('I was cqalled')
    }, 4000);
    res.send('Helo')
})

app.post('/contact', function (req, res) {
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
        service: 'gmail',
        auth: {
            user: 'ellisotoo@gmail.com',
            pass: 'thinkglobal1'
        }
    });


    var mailOptions = {
        from: 'Node Mailer',
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
    res.render('contactUs.ejs')
})


app.post('/send', function (req, res) {
    const output = `
<p>You have a new newsletter request</p>
<ul>
    <li>${req.body.name}</li>
    <li>${req.body.email}</li>
    <li>${new Date()}</li>
</ul>
`

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ellisotoo@gmail.com',
            pass: 'thinkglobal1'
        }
    });


    var mailOptions = {
        from: 'Node Mailer',
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
    res.render('index.ejs')
})