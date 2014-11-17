// Filename: app.js
define([
    'jquery',
    'jquerymobile',
    'underscore',
    'backbone',
    'router', // Request router.js
], function($,jm, _, Backbone, Router){
    var initialize = function(){
        // Pass in our Router module and call it's initialize function
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
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});
