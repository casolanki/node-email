var express = require('express')
var router = express.Router()
var utils = require('../utils') 

/* -- SEND GRID CONFIGRATION */

console.log('API Key before')
const apikey = '';

router.post('/:action', function(req, res, next) {
    
    var action = req.params.action

    console.log('API Key after:' + apikey )  
    // console.log(process.env.SENDGRID_API_KEY);
    if(action  == 'send')
    {
        var recipients = req.body.recipients // comma separated list of emails
        var list = recipients.split(',')

        utils.Email.sendEmails(list,req.body,function(){
              res.json({
                confirmation: 'success',
                message: 'Email Sent'
            })
        })       


       return
    }

    res.json({
        confirmation: 'false',
        message: 'Invalid action'
   })
});

module.exports = router;
