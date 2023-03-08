const express = require("express");
const User = require('../utils/user') 

const app = express();

app.use(express.json());

module.exports = {
    
saveLog: function(recipients, emailInfo,){
    recipients.forEach(function(recipient, i) {  

        let payload={    
            
            fromemail:  'uvchsolanki@gmail.com',
            toemail: recipient.trim(),
            subject: emailInfo.subject,
            body: emailInfo.body 
          }

        User.create(payload); 

    })   
  }
}