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
    var templatingFunction = Handlebars.compile($('#food-template').html());
    var results = templatingFunction({
      foods: foods
    });
      $("#songs").html(results);
    };

  return {
    indexFoods: getFoods
  };


  var _renderMovies = function(movies){
    var templatingFunction = Handlebars.compile($('#movies-template').html());
    var results = templatingFunction({
      movies: movies
    });
    $("#songs").html(results);
    };

  return {
    indexMovies: getMovies
  };



  var _renderSongs = function(songs){
    var templatingFunction = Handlebars.compile($('#songs-template').html());
    var results = templatingFunction({
      songs: songs
    });
    $("#songs").html(results);
    };

  return {
    indexSongs: getSongs
  };


// your code ends here


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
