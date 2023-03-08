# node-email
### Used Technologies
- Nodejs
- Sqllite3
- SendGrid

### Installation
First you need to clone repo into local machine.

run npm install

Run project using below command```
npm start
```
##### Below is the architectural diagram for email services.

![My Image](/documents/services.png)

After completing the setup, you can send a post request api request to the API gateway using Postman. I have added Postman script to the document directory; you can import that file, update the URL, and run it.

### How the system works:
Request-handler-service is being triggered by API Gateway. Then it will send a message to send-grid and return a success response. After that, send-grid triggers the data store using db-service. Then it will be receiving payload, and it will store the request payload in the database. Then it will send a message to the receipient.
