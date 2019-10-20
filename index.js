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
        /*  host: 'server213.web-hosting.com',
         port: 465,
         secure: true, // true for 465, false for other ports
         auth: {
             user: 'ellis@asarramofh.com', // generated ethereal user
             pass: 'thinkglobal' // generated ethereal password
         } */
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
    res.render('index.ejs');
    console.log(output)
})