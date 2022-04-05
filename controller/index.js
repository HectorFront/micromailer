const nodemailer = require('nodemailer');
const config = require('../config/service.config');
const { template } = require('../template');

export const sendEmail = (req, res) => {
    const mailOptions = {
        from: config.auth.user,
        to: '',
        subject: '',
        html: template
    };

    nodemailer.createTransport(config).sendMail(mailOptions, (err, results) => {
        if (err)
            res.send({ error: `Email sending failed`, status: err });
        res.send({ success: `Email successfully sent`, status: results });
    });
};