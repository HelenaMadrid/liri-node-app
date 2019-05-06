//js
require("dotenv").config();
var axios = require("axios");

var moment = require("moment");

//js
var keys = require("./keys");

//js
//var spotify = new Spotify(keys.spotify);

var userCommand = process.argv[2];
switch (userCommand) {
    case "concert-this":
        console.log(userCommand);
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

            })


        //"https://rest.bandsintown.com/artists/"+artist+"/events?app_id=codingbootcamp"
        break;

    case "spotify-this-song":
        console.log(userCommand);
        break;

    case "movie-this":
        console.log(userCommand);
        break;

    case "do-what-it-says":
        console.log(userCommand);
        break;

    //case default:
    //break;

}