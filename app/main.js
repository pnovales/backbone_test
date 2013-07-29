$(function(){

    var quickJsBb = Backbone.View.extend({

        el: '#sectionppal',

        events: {
            'click #addbtn': 'newdata'
        },

        initialize: function () {

            this.$inputName = this.$('#user_name');
            this.$inputPosition = this.$('#user_position');
            this.$inputFood = this.$('#user_food');

            this.list = $('#services');

            likes.each(function(like){
                var view = new LikeView({ model: like });
                this.list.append(view.render().el);
            }, this);

            this.listenTo(likes, 'add', this.addrow);
        },

        addrow: function (Like) {
            var view = new LikeView({ model: Like });
            $('#services').append(view.render().el);
        },

        newdata: function () {
            likes.create({name:this.$inputName.val().trim(),
                          position:this.$inputPosition.val().trim(),
                          favorite_food:this.$inputFood.val().trim()});
        }
    });

    new quickJsBb();

});
