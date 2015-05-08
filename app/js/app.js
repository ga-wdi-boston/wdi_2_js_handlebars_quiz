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
    var result = template({
      foods: foods
    });
    console.log(result);
    $('#foods').html(result);
  };


var _renderSongs = function(songs){
    // your code starts here
    var template = Handlebars.compile($('#song-template').html());
    var result = template({
      songs: songs
    });
    console.log(result);
    $('#songs').html(result);

    // your code ends here
  };


  var _renderMovies = function(movies){
    // your code starts here
    var template = Handlebars.compile($('#movie-template').html());
    var result = template({
      movies: movies
    });
    console.log(result);
    $('#movies').html(result);

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
