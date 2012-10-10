define([
  'ember'
, 'app'
, 'text!templates/location.handlebars'
],
function(
  Ember
, App
, locationHtml
) {

  App.LocationView = Ember.View.extend({
    template: Ember.Handlebars.compile(locationHtml)
  });

});


