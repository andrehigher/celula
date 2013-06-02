App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Store = DS.Store.extend({
  revision: 12
});

App.Router.map(function() {


  this.resource('settings', { 'path': '/settings/:user_id' } ,function() {
    this.route('profile');
    this.route('contact');
    this.route('address');
    this.route('photo');
    this.route('password');
  });


});

App.SettingsRoute = Ember.Route.extend({

	// model: function(params){
	// 	return App.User.find(params.user_id);
	// }

});

App.User = DS.Model.extend({
  first_name: 					DS.attr('string'),
  last_name: 						DS.attr('string'),
  birthday: 						DS.attr('date'),
  gender: 							DS.attr('string'),
	nationality: 					DS.attr('string'),
	nickname: 						DS.attr('string'),
	relationship_status: 	DS.attr('string'),


  // address:                { type: Schema.Types.ObjectId, ref: 'Address' },
  // emails:                 [ {} ],
  // managed_groups:         [ { type: Schema.Types.ObjectId, ref: 'Groups' } ], // Grupos liderados pelo usuario
  // phones:                 [ {} ],
  // roles:                  [ { type: String } ]
});

