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
    var template = Handlebars.compile($('#foods').html());
    var result = template({
      foods: foods
    });
    $('#foods').html(result);
});

  var _renderMovies = function(movies){
    var template = Handlebars.compile($('#movies').html());
    var result = template({
      movies: movies
    });
    $('#movies').html(result);
}));

  var _renderSongs = function(songs){
    var template = Handlebars.compile($('#songs').html());
    var result = template({
      songs: songs
    });
    $('#songs').html(result);
}));

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
