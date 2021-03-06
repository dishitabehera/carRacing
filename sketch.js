var db;
var gameState = 0;
var player, form;
var playerCount;
playerCount = 0;

var cars, car1,car2;

var allPlayers;

function preload(){
    car1Img = loadImage("car1.png")
    car2Img = loadImage("car2.png")
    trackImg = loadImage("track.jpg")
}
function setup(){
    createCanvas(displayWidth-20,displayHeight - 20);
    db = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 2){
        game.update(1)
    }
    if(gameState === 1){
        clear()
        game.play()
    }
}
    