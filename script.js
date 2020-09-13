var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		"x-rapidapi-key": "c56275269fmshd3bc2584975a2eep1e6fd3jsnca648f8db286"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

$('#form').submit(function(e){
    e.preventDefault();
  
var userInput = $('#search').val()

  // Replaced the spacing with %20
var replaceUserInput = userInput.replace(/ /g, '%20');

let result = ''

var finalResult =  'https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=' + replaceUserInput + '&rapidapi-key=c56275269fmshd3bc2584975a2eep1e6fd3jsnca648f8db286'
    console.log(finalResult);

$.get(finalResult, function(data){
    console.log(data);
    $('#formResults').html('')


    });
});