'use strict';

var favorites = (function(){

  var _getFavorites = function(){
    $.getJSON( "lib/db.json").success(function(response){
      _renderFoods(response.foods);
      _renderMovies(response.movies);
      _renderSongs(response.songs);
    });
  };

  var _renderFoods = function(foods){
    var foodFunc = Handlebars.compile($('#food-template').html());
    $('#foods').html(foodFunc({
      foods: foods
    }));
  };

  var _renderMovies = function(movies){
    // your code starts here
    var movieFunc = Handlebars.compile($('#movie-template').html());
    $('#movies').html(movieFunc({
      movies: movies
    }));
    // your code ends here
  };

  var _renderSongs = function(songs){
    // your code starts here
    var songFunc = Handlebars.compile($('#song-template').html());
    $('#songs').html(songFunc({
      songs: songs
    }));
    // your code ends here
  };

  var init = function(){
    _getFavorites();
  };

  return {
    init: init
  };

})();

$(document).ready(function(){
  favorites.init();
});
