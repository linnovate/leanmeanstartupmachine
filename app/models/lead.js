/**
 * Module dependencies.
 */
var mongoose = require('mongoose')
  , env = process.env.NODE_ENV || 'development'
  , config = require('../../config/config')[env]
  , Schema = mongoose.Schema

/**
 * Lead Schema
 */

var LeadSchema = new Schema({
  firstName: {type: String, default: '', trim : true},
  lastName: {type: String, default: '', trim : true},
  phone: {type: String, default: '', trim : true},
  email: {type: String, default: '', trim : true},
  created: {type: Date, default: Date.now}
});

mongoose.model('Lead', LeadSchema)