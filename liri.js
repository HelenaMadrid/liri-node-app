//js
//require("dotenv").config();

//var keys = require("./keys");

//var spotify = new Spotify(keys.spotify);

var userCommand = process.argv[2];
switch (userCommand) {
    case "concert-this":
        console.log(userCommand);
        var artist= process.argv[3];
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