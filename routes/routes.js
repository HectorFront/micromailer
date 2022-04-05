const express = require('express');
const router = express.Router();

const { sendEmail } = require('../controller');

router
    .get('/', (req, res)=> res.send({ stateRouter: "[Service] => Status: OK" }))
    .post('/send/email', sendEmail)

module.exports = router;

