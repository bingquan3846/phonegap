define([
    'underscore',
    'backbone',
], function(_, Backbone) {

    var TumblrModel = Backbone.Model.extend({

        defaults : {
            query : "unknown",
            blog  : "unknown"
        },

        initialize: function( options ) {
            this.query = options.query;
            this.blog  = options.blog;
        },

        url : function() {
            if(this.blog == ''){
                return 'http://api.tumblr.com/v2/tagged?tag='+this.query+'&api_key=FWLNCaW9vTiZtthwrlU75oQzuUxz8kwLfpJsEavQgvryGGlVb8&limit=20&offset=2' ;
            }else{
                //console.log('http://api.tumblr.com/v2/blog/'+ this.blog +'.tumblr.com/posts?api_key=FWLNCaW9vTiZtthwrlU75oQzuUxz8kwLfpJsEavQgvryGGlVb8');
                return 'http://api.tumblr.com/v2/blog/'+ this.blog +'.tumblr.com/posts?api_key=FWLNCaW9vTiZtthwrlU75oQzuUxz8kwLfpJsEavQgvryGGlVb8';
            }

        },

        parse : function(res) {
            // because of jsonp

            return res.response;
        }

    });

    return TumblrModel;

});
