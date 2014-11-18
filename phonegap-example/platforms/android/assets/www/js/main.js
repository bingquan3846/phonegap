// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
    paths: {
        jquery: 'libs/jquery/jquery-1.10.2.min',
        jquerymobile: 'libs/jquery/jquery.mobile-1.4.2.min',
        phonegap:'phonegap',
        transit: 'libs/jquery/jquery.transit.min',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone-min',
        templates: '../templates'
    }

});

require([
    // Load our app module and pass it to our definition function
    'app',

], function(App){
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
});
