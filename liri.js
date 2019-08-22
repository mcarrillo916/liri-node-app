require("dotenv").config();
var keys = require("./keys.js");
var search = require("./search.js")
var search = new search()
var spotify = new spotify(keys.spotify);
var fs = require("fs");


let input = process.argv[2]
let question = process.argv.slice(3).join(".")

function userCommand(input, question){
    switch(input){
        case `concert-this`:
            concertThis();
            break;
        case `spotify-this-song`:
            spotifyThisSong();
            break;
        case `movie-this`:
            movieThis();
            break;
        case `do-what-it-says`:
            doWhatItSays();
            break;
        default:
            console.log("Say Whaaaaaaa?");
            break;
    }
}
userCommand(input, question)