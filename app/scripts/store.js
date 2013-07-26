
App.Store = DS.Store.extend({
	revision:12,
	adapter: 'DS.FixtureAdapter'
});

App.Post =DS.Model.extend({
	title: DS.attr('string'),
	author: DS.attr('string')
});

App.Post.FIXTURES=[{
	id:1,
	title:"Rail",
	author:"Bob"
},{
	id:2,
	title:"Parley",
	author:"Jef"
}];
