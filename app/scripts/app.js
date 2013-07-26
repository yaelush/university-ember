App = Ember.Application.create();


require('scripts/routes/*');
require('scripts/controllers/*');
require('scripts/models/*');
require('scripts/views/*');
require('scripts/router');


//store
require('scripts/nerdeez-ember/tastypie_serializer');
require('scripts/nerdeez-ember/tastypie_adapter');
require('scripts/nerdeez-ember/porthole.min');
require('scripts/nerdeez-ember/wormhole');
require('scripts/store');