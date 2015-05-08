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
    var template = Handlebars.compile($('#food-template').html());
    $('#foods').html(template({
      foods: foods
    }));
  };

  var _renderMovies = function(movies){
    var template = Handlebars.compile($('#movie-template').html());
    $('#movies').html(template({
      movies: movies
    }));
  };

  var _renderSongs = function(songs){
   var template = Handlebars.compile($('#song-template').html());
    $('#songs').html(template({
      songs: songs
    }));
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
