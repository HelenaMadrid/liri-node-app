# Project Title

LIRI Bot

## How does it works?

LIRI Bot is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## How can I use it?

You can use the following commands:

* concert-this [artist/band name here] - Gives you information about concerts
* spotify-this-song [song name] - Gives you information about song name
* movie-this [movie name] - Gives you information about that movie
* do-what-it-says - Reads from random.txt and gets the command and the value and executes the command

## Built With

* [Javascript](https://www.javascript.com/)
* [Jquery](https://jquery.com/)
* [NodeJs](https://nodejs.org/en/)
* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
* [Axios](https://www.npmjs.com/package/axios)
* [OMDB API](http://www.omdbapi.com/)
* [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
* [Moment](https://www.npmjs.com/package/moment)
* [DotEnv](https://www.npmjs.com/package/dotenv)

## Working proof

* See it in action gif: 


**concert-this**

* The user is searching for concert information about Ariana Grande.
![alt text](https://github.com/HelenaMadrid/liri-node-app/blob/master/images/concert-this-ariana-grande.gif "concert-this ariana grande")

* The user inputs an artist but although the artist is found, the response came back empty.
![alt text](https://github.com/HelenaMadrid/liri-node-app/blob/master/images/concert-this-christina-aguilera.gif "concert-this christina aguilera")

* The user gave no argument after the command.
![alt text](https://github.com/HelenaMadrid/liri-node-app/blob/master/images/concert-this-empty.gif "concert-this")


**spotify-this-song**

* The user is searching for information about any song that matches the name that the user input, in this case, any song with the name **bellyache** will be printed.
![alt text](https://github.com/HelenaMadrid/liri-node-app/blob/master/images/spotify-this-song-bellyache-short.gif "spotify-this-song bellyache")

* The user gave no argument after the command, so it will print information about the song of Ace of Base "The Sign".
![alt text](https://github.com/HelenaMadrid/liri-node-app/blob/master/images/spotify-this-song-empty.gif "spotify-this-song")

* If the user inputs nonesense after the command, it will simply exit the program.

**movie-this**

* The user is searching for information about the movie Battle Angel.
![alt text](https://github.com/HelenaMadrid/liri-node-app/blob/master/images/movie-this-battle-angel.gif "movie-this battle angel")

* The user gave no argument after the command, so it will print information about the movie "Mr. Nobody".
![alt text](https://github.com/HelenaMadrid/liri-node-app/blob/master/images/movie-this-empty.gif "movie-this")

* Note: The user needs to input the complete name of the movie to guarantee the correct movie information is printed. This is because when dealing with sagas or movies with similar titles, only the last movie that matched will be printed. For example, if I were to look for The Lord of The Rings' first movie "The Fellowship of the Ring", but only wrote "The lord of the rings", you would get the movie which name is exactly just that, which in this case is a 1978 movie, instead of the newer ones. To find this particular movie, I would have to input "the lord of the rings: the fellowship of the ring" or "the fellowship of the ring"








## Authors

* **Débora Helena Madrid Morales** - [HelenaMadrid](https://github.com/HelenaMadrid)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## URLS

* [Github project](https://github.com/HelenaMadrid/liri-node-app)
