
App.NerdeezSearchController = Ember.ArrayController.extend({
	
	/**
	 * the search query
	 * @property
	 * @public
	 * @type {string}
	 */
	searchQuery: null,
	
	/**
	 * the model for the search
	 * @property
	 * @private
	 * @type {subclass of DS.Model}
	 */
	_model: null,
	
	/**
	 * when the user submits the search form
	 */
	search: function(){
		if(this.get('_model') != null)
			this.set('content', this.get('_model').find({search: this.get('searchQuery')}));
	}.observes('searchQuery')
});

/**
 * the controller for the search university
 */
App.SearchUniversityController = App.NerdeezSearchController.extend({
	_model: App.University
});
