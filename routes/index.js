var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var dotenv = require('dotenv');
var bodyparser = require("body-parser");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*GET pricing page. */
router.get('/pricing', function(req,res) {
    res.render('pricing', {title: 'Express'});
});



// POST route from contact form
router.post('/contact', function(req, res){
    var mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
        host:'smtp.gmail.com',
        service: 'Gmail',
        port: 465,
        secure: false,
        auth: {
            user: 'ulysseswalters000@gmail.com',
            pass: 'Percuss1on!'
        },

    });



    mailOpts = {
        from: req.body.name + ' &lt;' + req.body.email + '&gt;',
        to: 'ulysseswalters000@gmail.com, zendodigital@gmail.com',
        subject: 'New Message from ' + req.body.email,
        text: `${req.body.name} (${req.body.email}) phone#: ${req.body.number} \n message: ${req.body.message}`
    };
    smtpTrans.sendMail(mailOpts, function(err, res){
        if (err) {
            console.log(err);
            res.send(console.log(err));
        } else {
            res.redirect('/');
        }
    });
    res.redirect('/');
});



// module.exports = router;
