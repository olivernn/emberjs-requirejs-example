define([
  'ember'
, 'app'
, 'text!templates/application.handlebars'
],
function(
  Ember
, App
, applicationHtml
) {

  App.ApplicationView = Ember.View.extend({
    template: Ember.Handlebars.compile(applicationHtml)
  });

});


