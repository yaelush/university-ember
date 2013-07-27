
App.UniversitiesRoute = Ember.Route.extend({
	model: function(param){
		return App.University.find({limit: 20, order_by: 'title'});
	}
});


