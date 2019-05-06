//js
require("dotenv").config();
var axios = require("axios");

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
                console.log(response.data);
                console.log();
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