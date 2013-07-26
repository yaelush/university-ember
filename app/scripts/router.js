

App.Router.map(function () {
	this.resource('about');
	this.resource('universities', function() {
	    this.route('results');
		});
});


