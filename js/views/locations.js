define([
  'ember'
, 'app'
, 'text!templates/locations.handlebars'
],
function(
  Ember
, App
, locationsHtml
) {

  App.LocationsView = Ember.View.extend({
    template: Ember.Handlebars.compile(locationsHtml)
  });

});

