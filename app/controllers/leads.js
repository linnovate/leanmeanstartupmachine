/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , async = require('async')
  , Lead = mongoose.model('Lead')
  , _ = require('underscore')

/**
 * Create an lead
 */
exports.create = function (req, res) {
  var lead = new Lead(req.body)
  
  
  
  res.jsonp(lead)
}