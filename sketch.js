 var game;
var database;
var form;
var gameState = 0;
var player;

var ground;

var backgroundImage;
var Bg;
var playerCount;
var Mario;
var allPlayers;
var MarioImage;
function preload(){
	
backgroundImage = loadImage("Images/BgImage.jpg");

MarioImage = loadAnimation("Images/Mario1.jpg","Images/Mario2.jpg","Images/Mario3.jpg","Images/Mario4.jpg","Images/Mario5.jpg"
,"Images/Mario6.jpg","Images/Mario7.jpg","Images/Mario8.jpg","Images/Mario9.jpg","Images/Mario10.jpg","Images/Mario11.jpg","Images/Mario12.jpg")
	
}

function setup(){

	database = firebase.database();
createCanvas(displayWidth, displayHeight-130);

//Bg = createSprite(displayWidth/2-10,displayHeight/4+70);
//Bg.addImage(backgroundImage);
//Bg.scale = 0.44;
//Bg.velocityX = -5;

Mario = createSprite(100,610,50,50);
Mario.addAnimation("running",MarioImage);
Mario.scale = 0.2;

game = new Game();
game.getState();
if(gameState === 0){
	game.start();
}


ground = createSprite(1000, 680, 2000, 20);
//ground.visible = false;


}


function draw(){

	//if (Bg.x < 0){
	//	Bg.x = Bg.width/2;
	  //}
	background(255);
	drawSprites();
	
}
