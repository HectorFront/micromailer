const express = require('express');
const router = express.Router();

const microservice = require('../controller/email');

router
    // Route of nodemailer //
    .get('/', (req, res)=> res.send({ stateRouter: "micro service status: OK" }))
    .post('/send-email', microservice.sendEmail)

module.exports = router;

