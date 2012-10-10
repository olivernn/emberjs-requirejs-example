requirejs.config({
  enforceDefine: true

, paths: {
    // Libraries
    jquery        : 'libs/jquery/jquery-1.7.2.min'
  , handlebars    : 'libs/handlebars/handlebars-1.0.0.beta.6'
  , ember         : 'libs/ember/ember-1.0.pre'
    // Require.js Plugins
  , text          : 'libs/require/text'
    // Templates
  , templates     : '../templates'
  }

, shim: {
    'handlebars': {
      exports: 'Handlebars'
    }
  , 'ember': {
      deps    : ['jquery', 'handlebars']
    , exports : 'Ember'
    }
  }
});

define([
  'app'
, 'router'
],
function(
  App
, Router
) {
  App.initialize();
});

