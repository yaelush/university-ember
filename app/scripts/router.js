

App.Router.map(function () {
	this.resource('about');
	this.resource('universities');
	this.resource('add_uni');
});

App.IndexRoute = Ember.Route.extend({
	redirect: function(){
		this.transitionTo('universities');
	}
})