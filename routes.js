var express = require('express');
var router = express.Router();
var sample = require('./data');


/* router.use('/', function (req, res, next) {
}); */

router.get('/', function (req, res) {
    res.render('index.ejs', {
        name: sample
    });
});


//* SERVICES ROUTING
router.get('/taxAdvisory', function (req, res) {
    res.render('taxAdvisory.ejs');
});

router.get('/accounting', function (req, res) {
    res.render('accounting.ejs');
});
router.get('/payrollAndHr', function (req, res) {
    res.render('payrollAndHr.ejs');
});
router.get('/internalAudit', function (req, res) {
    res.render('internalAudit.ejs');
});

router.get('/businessRegistration', function (req, res) {
    res.render('businessRegis.ejs');
});
router.get('/regulationComp', function (req, res) {
    res.render('regulationComp.ejs');
});
router.get('/softwaresAndBusiness', function (req, res) {
    res.render('softwaresAndBusiness.ejs');
});




//* Softwares Menu::
router.get('/accountingSoftwares', function (req, res) {
    res.render('accountingSoftwares.ejs');
});
router.get('/humanResource', function (req, res) {
    // res.send('Softwares')
    res.render('humanResource.ejs');
});
router.get('/payrollAndHr', function (req, res) {
    // res.send('Softwares')
    res.render('payrollAndHr.ejs');
});
router.get('/clientProfiles', function (req, res) {
    res.render('clientProfiles.ejs');
});


//* Other Single Pages
router.get('/contactUs', function (req, res) {
    // res.send('Softwares')
    res.render('contactUs.ejs');
});
router.get('/aboutUs', function (req, res) {
    // res.send('Softwares')
    res.render('aboutUs.ejs');
});



module.exports = router;