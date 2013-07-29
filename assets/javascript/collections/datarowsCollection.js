/**
 * Created with JetBrains WebStorm.
 * User: I
 * Date: 18/06/13
 * Time: 12:39 PM
 * To change this template use File | Settings | File Templates.
 */
var LikeList = Backbone.Collection.extend({

    model: Like
});

var likes = new LikeList([
    new Like({ name: 'Peter', position: 'Developer', favorite_food: 'Fruits' }),
    new Like({ name: 'Dey', position: 'Designer', favorite_food: 'Wafles' }),
    new Like({ name: 'Andrew', position: 'Sales', favorite_food: 'Rice' })
]);




