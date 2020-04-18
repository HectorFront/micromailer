const nodemailer = require('nodemailer');
const config = require('../config/serviceEmail');

module.exports = {

    sendEmail: (req, res) => {
        const form = `
        <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <style>
                html,
                body {
                    height: 100% !important;
                    width: 100% !important;
                    padding: 0 !important;
                    margin: 0 !important;
                    min-width: 100%!important;
                }
        
                .content-email {
                    width: 100% !important;
                    height: 100% !important;
                    padding-top: 20px !important;
                    padding-bottom: 20px !important;
                    scroll-padding-left: 0 !important;
                    scroll-padding-right: 0 !important;
                    scroll-padding-bottom: 0 !important;
                    scroll-padding-top: 0 !important;
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                    margin: 0 !important;
                    background-color: rgb(62, 150, 250) !important;
                }
        
                .box {
                    width: 100%; 
                    max-width: 500px;
                    height: 300px !important;
                    background-color: #172738 !important;
                    border-radius: 10px !important;
                    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1) !important;
                }
        
                .box-header {
                    color: #444 !important;
                    border-top-left-radius: 10px !important;
                    border-top-right-radius: 10px !important;
                    background-color: rgb(0, 105, 243) !important;
                }
        
                .title-box>h1 {
                    color: white !important;
                    padding: 15px !important;
                    margin: 0 !important;
                    font-size: 20px !important;
                    font-weight: bold !important;
                    text-align: center !important;
                    font-family: 'Arial', sans-serif !important;
                }
        
                .box-content>.title-content {
                    color: white !important;
                    font-family: 'Arial', sans-serif !important;
                    text-align: justify !important;
                    padding-left: 30px !important;
                    padding-right: 30px !important;
                }
        
                .code-content {
                    background-color: rgb(0, 105, 243);
                    margin-left: 10% !important;
                    margin-right: 10% !important;
                    height: 60px !important;
                    border-radius: 10px !important;
                }
        
                .code-content>p {
                    color: rgb(255, 255, 255) !important;
                    font-size: 35px !important;
                    line-height: 60px !important;
                    margin-top: 0 !important;
                    font-family: 'Arial', sans-serif !important;
                    text-align: center !important;
                    vertical-align: middle !important;
                }

                hr {
                    margin: 0 !important;
                    padding: 0 !important;
                    width: 100% !important;
                }

            </style>
        </head>
        
        <body yahoo>
            <center>
                <div class="content-email">
                    <section align="center" class="box">
                        <div align="center" class="box-header">
                            <div class="title-box">
                                <h1>Reset your password</h1>
                            </div>
                        </div>
                        <div align="center" class="box-content">
                            <div align="center" class="title-content">
                                <h5>
                                    Este email está sendo testado para envio de código de recuperação de senha,
                                    estou escrevendo qualquer coisa, e é isso.
                                </h5>
                                <hr>
                            </div>
                            <h3 style="text-align: center !important; color: white !important; font-family: 'Arial', sans-serif !important;">Recovery code:
                            </h3>
                            <div align="center" class="code-content">
                                <p>131289</p>
                            </div>
                        </div>
                    </section>
                </div>
            </center>
        </body>
        </html>
    `;

        const mailOptions = {
            from: config.auth.user,
            to: 'giovanesantos1999@gmail.com',
            subject: 'Testanto',
            html: form
        };

        nodemailer.createTransport(config).sendMail(mailOptions, (err, results) => {
            if (err)
                res.send({ error: `Email sending failed`, status: err });
            res.send({ success: `Email successfully sent`, status: results });
        });
    }

}