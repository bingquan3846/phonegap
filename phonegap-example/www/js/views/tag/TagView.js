define([
    'jquery',
    'underscore',
    'backbone',
    'models/social/TumblrModel',
    'text!templates/tag/tagTemplate.html'
], function($, _, Backbone, TumblrModel, tagTemplate){

    var TagView = Backbone.View.extend({
        el: $("#page"),

        initialize: function() {

            var that = this;
            var options = {query: 'cat'}


            var onDataHandler = function(collection) {
                that.render();
            }

            this.model = new TumblrModel(options);
            this.model.fetch({ success : onDataHandler, dataType: "jsonp"});

        },

        render: function(){

            var data = {
                posts: this.model.toJSON(),
                _: _
            };
            console.log(data.posts);
            $('#loader').css('display', 'block')
            $('#loader').delay(800).fadeOut('slow');

            //console.log(data.posts[0].blog_name);


            var compiledTemplate = _.template( tagTemplate, data );
            this.$el.html(compiledTemplate);
        }

    });

    return TagView;

});