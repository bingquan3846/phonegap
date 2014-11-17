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

    $( document ).bind( "mobileinit", function() {
        // Make your jQuery Mobile framework configuration changes here!
        $.support.cors = true;
        $.mobile.allowCrossDomainPages = true;
    });
    $(document).on('pageinit','[data-role=page]',function(){
        
        $('#option-button').bind('click', function(event, ui) {
            if($('#option').css('display') == "none" ){
                $('#option').slideDown();
            }else{
                $('#option').slideUp();
            }
        });
    });
    $( "#tag " ).change(function() {
        var tagView = new TagView($(this).val());
        tagView.render();
    });

    app_router.on('route:defaultAction', function (actions) {

          var tagView = new TagView('dog');
          tagView.render();
    });


    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
