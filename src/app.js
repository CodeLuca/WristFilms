/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
var UI = require('ui');

var main = new UI.Card({
  title: 'WristFilms',
  body: 'Press the top button.'
});

main.show();

main.on('click', 'up', function(e) {
			var ajax = require('ajax');
ajax({ url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=zwfx4bn5hwqkrnnsq4yu7ezz', type: 'json' },
  function(data) {
	var menu = new UI.Menu({
    sections: [{
      items: [{
        title: data.movies[0].title,
        subtitle: 'Critics Rating: ' + data.movies[0].ratings.critics_score
      }, {
        title: data.movies[1].title,
        subtitle: 'Critics Rating: ' + data.movies[1].ratings.critics_score
					}, {
        title: data.movies[2].title,
        subtitle: 'Critics Rating: ' + data.movies[2].ratings.critics_score
					}, {
        title: data.movies[3].title,
        subtitle: 'Critics Rating: ' + data.movies[3].ratings.critics_score
					}, {
        title: data.movies[4].title,
        subtitle: 'Critics Rating: ' + data.movies[4].ratings.critics_score
					}, {
        title: data.movies[5].title,
        subtitle: 'Critics Rating: ' + data.movies[5].ratings.critics_score
					}, {
        title: data.movies[6].title,
        subtitle: 'Critics Rating: ' + data.movies[6].ratings.critics_score
					}, {
        title: data.movies[7].title,
        subtitle: 'Critics Rating: ' + data.movies[7].ratings.critics_score
					}, {
        title: data.movies[8].title,
        subtitle: 'Critics Rating: ' + data.movies[8].ratings.critics_score
					}, {
        title: data.movies[9].title,
        subtitle: 'Critics Rating: ' + data.movies[9].ratings.critics_score
					}]
				}]
			});
  menu.on('select', function(e) {
  var card = new UI.Card();
	var ajax = require('ajax');
ajax({ url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=zwfx4bn5hwqkrnnsq4yu7ezz', type: 'json' },
  function(data) {
	card.scrollable(true);
	card.title(data.movies[e.itemIndex].title);
  card.body(data.movies[e.itemIndex].synopsis);
  card.show();
  }
);
	});
	menu.show();
	});
});
