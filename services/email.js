var helper = require('sendgrid').mail
var Promise = require('bluebird')
const apikey = '';

module.exports = {

    sendEmails: function(recipients, emailInfo, completion){

           var from_email = new helper.Email('uvchsolanki@gmail.com')
           var subject = emailInfo.subject
           var content = new helper.Content('text/html', emailInfo.content)
           var sg = require('sendgrid')(apikey)

            recipients.forEach(function(recipient, i) {  
            var to_email = new helper.Email(recipient.trim())
            var mail = new helper.Mail(from_email, subject, to_email, content)
            
            var sg = require('sendgrid')(process.env.SENDGRID_API_KEY)
            var request = sg.emptyRequest({
                method: 'POST',
                path: '/v3/mail/send',
                body: mail.toJSON(),
            })
          
            sg.API(request, function(error, response) {
                if(error){
                    //reject(error)
                    //return
                }
                 // resolve(response)
                })
             })

                completion()
          }
}
