// Initialize Firebase
var config = {
    apiKey: "AIzaSyAUAj0Lvd4NWE1twpADMZCkThVZUFVKdOU",
    authDomain: "rockpaperscissors-f43c5.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-f43c5.firebaseio.com",
    projectId: "rockpaperscissors-f43c5",
    storageBucket: "rockpaperscissors-f43c5.appspot.com",
    messagingSenderId: "269009874779"
};
firebase.initializeApp(config);

//Create variables

//Firebase database
var database = firebase.database();

//Timer
var timer;

//Wins
var winsPlayer1 = 0;
var winsPlayer2 = 0;

//Losses
var lossesPlayer1 = 0;
var lossesPlayer2 = 0;

//Rounds start at 1
var round = 1;

//Chat functionality
