require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var dotenv = require("dotenv");
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);

var userCommand = process.argv[2];

function spotifyThisSong(song) {
    spotify
        .search({ type: 'track', query: song })
        .then(function (response2) {
            response2.tracks.items.forEach(function (element) {
                if (song === element.name.toLowerCase()) {
                    var results = { Artist: element.artists[0].name, Song: element.name, Spotify: element.external_urls.spotify, PreviewSong: element.preview_url, Album: element.album.name }
                    console.log(JSON.stringify(results, null, 2));
                    logFile(results, userCommand, song);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function concertThis(artist) {
    axios
        .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function (response) {
            if (response.data.length === 0) {
                var results = "Sorry, there is no concert information about this artist. Please try another.";
                console.log(results);
                logFile(results, userCommand, artist);
            }
            else {
                for (var x = 0; x < response.data.length; x++) {
                    var resultNum = x + 1;
                    var date = response.data[x].datetime.replace("T", " ");
                    var results = { Artist: response.data[x].lineup[0], Venue: response.data[x].venue.name, Location: response.data[x].venue.city + ", " + response.data[x].venue.country, Date: moment(date).format('LLL') }
                    console.log(JSON.stringify(results, null, 2));
                    logFile(results, userCommand, artist);
                }
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function movieThis(movieName) {
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    axios
        .get(queryUrl)
        .then(
            function (response) {
                var results = { Title: response.data.Title, Year: response.data.Year, IMDBRating: response.data.imdbRating, RottenTomatoesRating: response.data.Ratings[1].Value, ProducedIn: response.data.Country, Language: response.data.Language, Plot: response.data.Plot, Actors: response.data.Actors }
                console.log(JSON.stringify(results, null, 2));
                logFile(results, userCommand, movieName);
            }
        )
        .catch(function (error) {
            console.log(error);
        });
}

function logFile(results, command, userInput) {
    fs.appendFile("log.txt", "\n\n" + command + " " + userInput + "\n" + JSON.stringify(results, null, 2), function (err) {
        if (err) {
            console.log(err);
        }
    });

}
switch (userCommand) {
    case "concert-this":
        var artist = process.argv[3] + " " + process.argv[4];
        concertThis(artist, userCommand);
        break;

    case "spotify-this-song":
        var song = process.argv.slice(3).join(" ").toLowerCase();
        if (song === "") {
            song = "the sign";
        }
        spotifyThisSong(song, userCommand);
        break;

    case "movie-this":
        var movieName = process.argv.slice(3).join("+");
        if (movieName === "") {
            movieName = "mr.nobody";
        }
        movieThis(movieName, userCommand);
        break;

    case "do-what-it-says":
        fs.readFile("random.txt", "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            }
            var dataArr = data.split(",");
            fileCommand = dataArr[0];
            fileArg = dataArr[1];
            var fileArgFixed = dataArr[1].slice(1, -1).toLowerCase();

            switch (fileCommand) {
                case "spotify-this-song":
                    if (fileArgFixed === "") {
                        fileArgFixed = "the sign";
                    }
                    spotifyThisSong(fileArgFixed);
                    break;
                case "concert-this":
                    concertThis(fileArgFixed);
                    break;
                case "movie-this":
                    if (fileArgFixed === "") {
                        fileArgFixed = "mr.nobody";
                    }
                    movieThis(fileArgFixed);
            }
        });
        break;

    default:
        console.log("Sorry, this command is not recognized, try any of these: 'spotify-this-song', 'concert-this', 'movie-this', or 'do-what-it-says'");


}