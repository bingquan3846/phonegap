define([
    'underscore',
    'backbone',
], function(_, Backbone) {

    var TumblrModel = Backbone.Model.extend({

        defaults : {
            query : "unknown"
        },

        initialize: function( options ) {
            this.query = options.query;
        },

        url : function() {
            return 'http://api.tumblr.com/v2/tagged?tag='+this.query+'&api_key=FWLNCaW9vTiZtthwrlU75oQzuUxz8kwLfpJsEavQgvryGGlVb8&limit=20&offset=2' ;
        },

        parse : function(res) {
            // because of jsonp

            return res.response;
        }

    });

    return TumblrModel;

});
