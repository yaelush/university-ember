

App.Router.map(function () {
	this.resource('about');
	this.resource('universities', function() {
    	this.resource('results', { path: ':results_id' })});
});


