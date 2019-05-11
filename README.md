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

**do-what-it-says**

* When the random.txt file has **'movie-this**,"the lion king" it will input:

![alt text](https://github.com/HelenaMadrid/liri-node-app/blob/master/images/random-movie-this.png "random-movie-this")
![alt text](https://github.com/HelenaMadrid/liri-node-app/blob/master/images/do-what-it-says-movie-this-lion-king.gif "random-movie-this lion king")

* When the random.txt file has **'concert-this**,"jonas brothers" it will input:

![alt text](https://github.com/HelenaMadrid/liri-node-app/blob/master/images/random-concert-this.png "random-concert-this")
![alt text](https://github.com/HelenaMadrid/liri-node-app/blob/master/images/do-what-it-says-concert-this-jonas-brothers.gif "random-concert-this jonas brothers")

* When the random.txt file has **'spotify-this-song**,"bad romance" it will input:

![alt text](https://github.com/HelenaMadrid/liri-node-app/blob/master/images/random-spotify.png "random-spotify-this-song")
![alt text](https://github.com/HelenaMadrid/liri-node-app/blob/master/images/do-what-it-says-spotify-this-song-bad-romance.gif "random-spotify-this-song bad romance")

**Log.txt**
* All the results from the user searches are addded into a document called "log.txt". At first, the document doesn't exists but it's creater after the first result is delivered.

![alt text](https://github.com/HelenaMadrid/liri-node-app/blob/master/images/without-log-txt.png "directory without log.txt")
![alt text](https://github.com/HelenaMadrid/liri-node-app/blob/master/images/with-log-txt.png "directory with log.txt")

* We can check the results of all the requests that the user has input.

![alt text](https://github.com/HelenaMadrid/liri-node-app/blob/master/images/log-text.gif "log.txt content")


## Authors

* **Débora Helena Madrid Morales** - [HelenaMadrid](https://github.com/HelenaMadrid)


## URLS

* [Github project](https://github.com/HelenaMadrid/liri-node-app)
