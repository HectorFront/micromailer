# Micromailer - Node.js (Open Source)
- <b>Author</b> Hector Rodrigues da Silva

### Install dependencies
```
npm i or yarn
```

### Start Microservice
```
npm start or yarn start
```
<br/>

## FROM
#### config/service.config.js
```javascript
const config = {
    service: 'gmail',
    auth: {
           user: 'email',
           pass: 'password'
       },
    } 

module.exports = config;
```
<br/>

## TO
#### controller/index.js
```javascript
const config = require('../config/service.config');

export const sendEmail = (req, res) => {
    const mailOptions = {
        from: config.auth.user,
        to: '',
        subject: '',
        html: template
    };

    ...
```
