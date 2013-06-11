/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
	async = require('async'),
	http = require('http'),
	Lead = mongoose.model('Lead'),
	_ = require('underscore')

	/**
	 * Create an lead
	 */
	exports.create = function(req, res) {
		var lead = new Lead(req.body);
		lead.save();

		var path = '/lead/new?key=6dc339490d7476bc0d51c901cef020832ae6f9d6&project_id=leads' 
				 + '&first_name=' + lead.firstName
				 + '&last_name=' + lead.lastName
				 + '&phone=' + lead.phone
				 + '&email=' + lead.email;

		var options = {
			host: 'dev.linnovate.net',
			port: 80,
			path: path
		};

		http.get(options, function(resp) {
			resp.on('data', function (chunk) {
				console.log('BODY: ' + chunk);
			});
		}).on("error", function(e) {
			console.log("Got error: " + e.message);
		});

		var notifier = require('../mailer/notifier');
		var to = "lior@linnovate.net";
		var fullName = lead.firstName + ' ' + lead.lastName;
		var subject =  fullName + ' sent you a lead ';
		var text = fullName + " sent you a lead, call him/her: " + lead.phone + " or email him/her: " + lead.email + " back."

		notifier.notify(to, subject, text, text);
		

		res.jsonp(lead);
	}