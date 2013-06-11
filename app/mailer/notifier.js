/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    nodemailer = require('nodemailer'),
    env = process.env.NODE_ENV || 'development'

    /**
     * Notification methods
     */

var Notifier = {

    /**
     * Comment notification
     *
     * @param {Object} options
     * @param {Function} callback
     * @api public
     */

    notify: function(to, subject, text, html, callback) {
        var smtpTransport = nodemailer.createTransport("SMTP", {
            service: "Gmail",
            auth: {
                user: "amos@linnovate.net",
                pass: "amoslinn"
            }
        });

        // setup e-mail data with unicode symbols
        var mailOptions = {
            from: "Amos Haviv ✔ <amos@linnovate.net>", // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            text: text, // plaintext body
            html: html // html body
        }

        // send mail with defined transport object
        smtpTransport.sendMail(mailOptions, function(error, response) {
            if (error) {
                console.log(error);
            } else {
                console.log("Message sent: " + response.message);
            }

            smtpTransport.close(); // shut down the connection pool, no more messages
        });
    }
}

/**
 * Expose
 */

module.exports = Notifier