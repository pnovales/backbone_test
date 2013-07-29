/**
 * Created with JetBrains WebStorm.
 * User: I
 * Date: 18/06/13
 * Time: 12:58 PM
 * To change this template use File | Settings | File Templates.
 */
    var LikeView = Backbone.View.extend({

    tagName: 'tr',

    template: _.template($('#content').html()),

    events: {
        'click .muted': 'deleteraw'
    },

    initialize: function () {
        this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function () {
        this.$el.html('<td>' + this.model.get('name') +  '</td>' +
            '<td>' + this.model.get('position') +  '</td>' +
            '<td>' + this.model.get('favorite_food') +  '</td>' +
            '<td>' + '<a class="muted">' + ' X' + '</a>' + '</td>');
        return this;
    },

    deleteraw: function () {
        this.model.destroy();
    }

    });

