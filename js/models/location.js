define([
  'ember'
, 'app'
],
function(
  Ember
, App
) {

  App.Location = Ember.Object.extend();
  App.Location.reopenClass({
    locations: []

  , find: function() {
      $.ajax({
        url: 'https://api.github.com/repos/emberjs/ember.js/contributors'
      , dataType: 'jsonp'
      , context: this
      , success: function(response) {
          response.data.forEach(function(location) {
            this.locations.addObject(App.Location.create(location))
          }, this)
        }
      });
      return this.locations;
    }

  , findOne: function(locationName) {
      var location = App.Location.create({
        login: locationName
      });

      $.ajax({
        url: 'https://api.github.com/repos/emberjs/ember.js/contributors'
      , dataType: 'jsonp'
      , context: location
      , success: function(response) {
          this.setProperties(response.data.findProperty('login', locationName));
        }
      });

      return location;
    }
  });

});

