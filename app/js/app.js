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
    var result = template({foods:foods});
    $('#food').html(result({
      foods: foods
    }));
  };


  var _renderMovies = function(movies){
    // your code starts here
    var template = Handlebars.compile($('#movies-template').html());
    var result = template({movies:movies});
    $('#song').html(result({
      movies: movies
    }));

    // your code ends here
  };

  var _renderSongs = function(songs){
    // your code starts here
    var template = Handlebars.compile($('#songs-template').html());
    var result = template({songs:songs});
    $('#movie').html(result({
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
