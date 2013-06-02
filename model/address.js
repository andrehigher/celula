var mongoose = require('mongoose'),
  	Schema = mongoose.Schema;

/**
 * Address
 */
var AddressSchema = new Schema({
  city:         { type: String },
  country:      { type: String },
  neighboor:    { type: String },
  number:       { type: String },
  postal_code:  { type: String },
  state:        { type: String },
  street:       { type: String }
});
 
mongoose.model('Address', AddressSchema);