var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Meeting
 */
var MeetingSchema = new Schema({
  address:      { type: Schema.Types.ObjectId, ref: 'Address' },
  data:         { type: Date, default: Date.now },
  group_id:     { type: Schema.Types.ObjectId, ref: 'Group' },
  happenings: 	[ { name: String, type: String, text: String } ],
  users:      	[ {type: Schema.Types.ObjectId, ref: 'User' } ]
});
 
mongoose.model('Meeting', MeetingSchema);