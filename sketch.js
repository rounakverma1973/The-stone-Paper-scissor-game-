//Created By Rounak Verma//
//Looking Forward Hoping That you will surely love it.//

//SElf Coded Program//
var L1 = prompt("Hi there ,What'up😉😉.Welcome to this stone,paper&Scissor game.This is AIBo Your Persnal AI Bot.Say Hi");
var L2 = prompt("What is Your Name?Type your Name Here.And Press Ok To Proceed Further!👇👇👇👇");

//defining a variable for the objects//
var landImage;
var AIbot,AIbotImg;


function preload(){
  landImage= loadImage("game-backgrounds-landscape-at-morning-vector-10692151.jpg");
  AIbotImg = loadImage("download (37).jpg") ;
}

var number = Math.floor(Math.random()*2);
console.log(number);

function setup() {
  createCanvas(1500, 700);

  //creating a command to win the users heart!!//
  
  if(number===0){
    prompt(`Wow Great Name ${L2}. People with this name are known for their talent. .`); 
  }
   
  if(number===1){
    prompt(`Wow Great Name ${L2}.`);
  }
   
  if(number===2){
    prompt(`Wow Great Name ${L2}.  Players with this name generally win the game.`);
  }
}


function draw() {
  background(landImage);
  AIbot = rect(200,200,10,10);
  AIbot.setAnimation(AIbotImg);
  AIbot.scale=0.5;
  
}

