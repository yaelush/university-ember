
App.AddUniController = Ember.ObjectController.extend({
	title: null,
	description: null,
  	save: function() {
	  	title = this.get('title');
	  	description = this.get('description');
	    var university= App.University.createRecord();
	    university.set('title',title);
	    university.set('description',description);
	    university.transaction.commit();
      	this.get('target.router').transitionTo('universities');
	}
});
