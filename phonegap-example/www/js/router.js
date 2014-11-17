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
        showTagView($(this).val(),$('#user').val());
    });
    $( "#user " ).change(function() {
          showTagView($('#tag').val(), $(this).val());
    });

    app_router.on('route:defaultAction', function (actions) {

         showTagView('dog','');
    });


    Backbone.history.start();
  };
  var showTagView = function(tag,user){
      var tagView = new TagView(tag, user);
      tagView.render();
  }
  return { 
    initialize: initialize
  };
});
