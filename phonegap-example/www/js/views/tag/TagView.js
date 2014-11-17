define([
    'jquery',
    'underscore',
    'backbone',
    'models/social/TumblrModel',
    'text!templates/tag/tagTemplate.html'
], function($, _, Backbone, TumblrModel, tagTemplate){

    var TagView = Backbone.View.extend({
        el: $("#page"),

        initialize: function(keyword,user) {

            var that = this;
            var options = {query: keyword,blog:user}


            var onDataHandler = function(collection) {
                that.render();
            }

            this.model = new TumblrModel(options);
            this.model.fetch({ success : onDataHandler, dataType: "jsonp"});

        },

        render: function(){
            if(this.model.blog == ''){
                var data = {
                    posts: this.model.toJSON(),
                    _: _
                };
            }else{
                var data = {
                    posts: this.model.toJSON().posts,
                _: _
            };
            }
            //console.log(this.model.toJSON());



            var compiledTemplate = _.template( tagTemplate, data );
            this.$el.html(compiledTemplate);
        }

    });

    return TagView;

});
