
App.Store = DS.Store.extend({
	
	adapter: Nerdeez.DjangoTastypieAdapter.extend({
	    serverDomain : SERVER_URL,
	    wormhole: Nerdeez.Wormhole,
	    serializer: Nerdeez.DjangoTastypieSerializer.extend({
        	init: function(){
                this._super();
                this.mappings.set( 'App.University', { university: { embedded: 'load' } } );
            	}
	    })
	})
	
});
