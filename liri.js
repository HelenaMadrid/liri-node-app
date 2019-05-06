//js
require("dotenv").config();
var axios = require("axios");

var moment = require("moment");
var Spotify = require("node-spotify-api");
var dotenv = require("dotenv");

//js
var keys = require("./keys");

//js
var spotify = new Spotify(keys.spotify);

var userCommand = process.argv[2];
switch (userCommand) {
    case "concert-this":
        //console.log(userCommand);
        var artist = process.argv[3] + " " + process.argv[4];
        axios
            .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
            .then(function (response) {
                //console.log(response);
                console.log(response.data);
                console.log(response.data.length);
                for (var x = 0; x < response.data.length; x++) {
                    var resultNum = x + 1;
                    //console.log(moment().format(response.data[x].datetime));
                    console.log("---------------------");
                    console.log("Result " + resultNum + " of " + response.data.length);
                    console.log(artist);
                    console.log("Venue: " + response.data[x].venue.name);
                    console.log("Location: " + response.data[x].city + ", " + response.data[x].country);
                    console.log("Date: " + response.data[x].datetime);
                    console.log("---------------------");
                }

            });
        break;

    case "spotify-this-song":
        //console.log(userCommand);
        var song = process.argv.slice(3).join(" ");
        spotify
            .search({ type: 'track', query: song })
            .then(function (response) {
                //console.log(response);
                //console.log(response.tracks.items.length);
                for (var x = 0; x < response.tracks.items.length; x++) {
                    // console.log("Name of song:");
                    // console.log(x);
                    if (song === response.tracks.items[x].name) {
                        //console.log("Exact Match Songs:");
                        // console.log(response.tracks.items[x]);
                        console.log("--------------");
                        console.log("Artist: " + response.tracks.items[x].artists[0].name);
                        //console.log("--------------");
                        console.log("Song: " + response.tracks.items[x].name);
                        //console.log("--------------");
                        console.log("Spotify Link: " + response.tracks.items[x].external_urls.spotify);
                        //console.log("--------------");
                        console.log("Album: " + response.tracks.items[x].album.name);
                        console.log("--------------");
                        //console.log(x);
                        //console.log("--------------");
                    }
                }
            })
            .catch(function (err) {
                console.log(err);
            });

        break;

    case "movie-this":
        //console.log(userCommand);
        var movieName = process.argv.slice(3).join("+");
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        axios
            .get(queryUrl).then(
                function (response) {
                    //console.log(response.data);
                    console.log("---------------------------");
                    console.log("Title: " + response.data.Title);
                    console.log("Year: " + response.data.Year);
                    console.log("IMDB Rating: " + response.data.imdbRating);
                    console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                    console.log("Produced in: " + response.data.Country);
                    console.log("Language: " + response.data.Language);
                    console.log("Plot: " + response.data.Plot);
                    console.log("Actors: " + response.data.Actors);
                    console.log("---------------------------");
                }
            );
        break;

    case "do-what-it-says":
        console.log(userCommand);
        break;

    //case default:
    //break;

}