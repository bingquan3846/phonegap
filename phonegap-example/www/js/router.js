// Filename: router.js
define([
  'jquery',
  'jquerymobile',
  'underscore',
  'backbone',
  'views/tag/TagView'
], function($,jm, _, Backbone, TagView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'projects': 'showProjects',
      'users': 'showContributors',
      'tag'  : 'showTags',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;



    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 
          var tagView = new TagView();
          tagView.render();
    });

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
