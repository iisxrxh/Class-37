
var database;
var player, form, game;
var gameState = 0;
var playerCount;
var allPlayers;


function setup(){
    createCanvas(500,500);
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
   
   
}

