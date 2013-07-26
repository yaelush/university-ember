
App.SearchController = Ember.ArrayController.extend({
	
	searchQuery: null,
	
	_model: null,
	
	search: function(){
		if(this.get('_model') != null)
		this.set('content', this.get('_model').find({search: this.get('searchQuery')}));
	}.observes('searchQuery')
});

App.UniversitiesController = App.SearchController.extend({
	_model: App.University
	
});
