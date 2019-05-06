//js
require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var dotenv = require("dotenv");

//js
var keys = require("./keys");

//js
var spotify = new Spotify(keys.spotify);

var userCommand = process.argv[2];

function spotifyThisSong(song) {
    spotify
        .search({ type: 'track', query: song })
        .then(function (response2) {
            //console.log(response2);
            //console.log(response2.tracks.items.length);
            //for (var y = 0; y < response2.tracks.items.length; y++) {
            // console.log("Name of song:");
            //console.log(y);
            response2.tracks.items.forEach(function (element) {
                //console.log(element);
                //console.log(song);
                //console.log(element.name);
                if (song === element.name.toLowerCase()) {
                    //console.log("Exact Match Songs:");
                    //console.log(response.tracks.items[x]);
                    //console.log(element);
                    console.log("--------------");
                    console.log("Artist: " + element.artists[0].name);
                    //console.log("--------------");
                    console.log("Song: " + element.name);
                    //console.log("--------------");
                    console.log("Spotify Link: " + element.external_urls.spotify);
                    //console.log("--------------");
                    console.log("Preview song: " + element.preview_url)
                    console.log("Album: " + element.album.name);
                    console.log("--------------");
                    //console.log(x);
                    //console.log("--------------");
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}


switch (userCommand) {
    case "concert-this":
        //console.log(userCommand);
        var artist = process.argv[3] + " " + process.argv[4];
        axios
            .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
            .then(function (response) {
                //console.log(response);
                // console.log(response.data);
                // console.log(response.data.length);
                for (var x = 0; x < response.data.length; x++) {
                    var resultNum = x + 1;
                    //console.log(moment().format(response.data[x].datetime));
                    console.log("---------------------");
                    console.log("Result " + resultNum + " of " + response.data.length);
                    console.log("Artist: " + response.data[x].lineup[0]);
                    console.log("Venue: " + response.data[x].venue.name);
                    console.log("Location: " + response.data[x].venue.city + ", " + response.data[x].venue.country);
                    console.log("Date: " + response.data[x].datetime);
                    console.log("---------------------");
                }

            });
        break;

    case "spotify-this-song":
        //console.log(userCommand);
        var song = process.argv.slice(3).join(" ").toLowerCase();
        spotifyThisSong(song);
        // spotify
        //     .search({ type: 'track', query: song })
        //     .then(function (response2) {
        //         console.log(response2);
        //         console.log(response2.tracks.items.length);
        //         console.log(response2.tracks.items[7].name);
        //         console.log(response2.tracks.items[7].external_urls.spotify);
        //         //for (var y = 0; y < response2.tracks.items.length; y++) {
        //         // console.log("Name of song:");
        //         //console.log(y);
        //         response2.tracks.items.forEach(function (element) {
        //             //console.log(element);
        //             //console.log(song);
        //             //console.log(element.name);
        //             if (song === element.name.toLowerCase()) {
        //                 //console.log("Exact Match Songs:");
        //                 //console.log(response.tracks.items[x]);
        //                 //console.log(element);
        //                 console.log("--------------");
        //                 console.log("Artist: " + element.artists[0].name);
        //                 //console.log("--------------");
        //                 console.log("Song: " + element.name);
        //                 //console.log("--------------");
        //                 console.log("Spotify Link: " + element.external_urls.spotify);
        //                 //console.log("--------------");
        //                 console.log("Preview song: "+ element.preview_url)
        //                 console.log("Album: " + element.album.name);
        //                 console.log("--------------");
        //                 //console.log(x);
        //                 //console.log("--------------");
        //             }
        //         });
        //     })
        //     .catch(function (err) {
        //         console.log(err);
        //     });

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
        fs.readFile("random.txt", "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            }
            var dataArr = data.split(",");
            fileCommand = dataArr[0];
            fileArg = dataArr[1];
            var song = dataArr[1].slice(1, -1).toLowerCase();
            console.log("command: " + fileCommand);
            console.log("track: " + song);

            if (fileCommand === "spotify-this-song") {
                spotifyThisSong(song);
            }

        });
        break;

    //case default:
    //break;

}