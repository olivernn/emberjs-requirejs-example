define([
  'ember'
, 'app'
, 'controllers/application'
, 'controllers/locations'
, 'controllers/location'
, 'views/application'
, 'views/locations'
, 'views/location'
],
function(
  Ember
, App
, ApplicationController
, LocationsController
, LocationController
, ApplicationView
, LocationsView
, LocationView
) {

  App.Router = Ember.Router.extend({
    enableLogging: true
  , root: Ember.Route.extend({
      locations: Ember.Route.extend({
        route: '/'
      , showLocation: Ember.Route.transitionTo('location')
      , connectOutlets: function(router) {
          router.get('applicationController').connectOutlet('locations', App.Location.find());
        }
      })
    , location: Ember.Route.extend({
        route: '/:locationName'
      , showLocations: Ember.Route.transitionTo('locations')
      , connectOutlets: function(router, context) {
          router.get('applicationController').connectOutlet('location', context);
        }
      , serialize: function(router, context) {
          return {
            locationName: context.get('login')
          }
        }
      , deserialize: function(router, urlParams) {
          return App.Location.findOne(urlParams.locationName);
        }
      })
    })
  });

});
