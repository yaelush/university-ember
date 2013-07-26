

App.NerdeezView = Ember.View.extend({
 
/**
* holds the static url
* @type {{string}}
* @public
*/
staticUrl: STATIC_URL,

});

App.SearchUniversityView = App.NerdeezView.extend({
	templateName: 'search-university'
});
