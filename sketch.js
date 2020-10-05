
var particles = [];
var plinko = [];
var divisions = [];

var divisionHeight = 300;
function setup() {
  createCanvas(480,800);
  
  
  
}

function draw() {
  background(221,49,229);
  
  for (var k = 0 ; k <= width ; k=k+80){
    divisions.push( new Divisions (k,height - divisionHeight/2,10,divisionHeight))
  }

  for (var j = 15; j<=width-10 ; j=j+30){
    plinko.push(new plinkos (j,75))
  }
  for (var j = 15 ; j<=width-20 ; j=j+50){
    plinko.push(new plinkos(j,175))
  }
  for (var j=15 ; j<=width-30 ;j=j+70){
    plinko.push(new plinkos(j,275))
  }
  for (var j=15 ; j<=width-40; j =+90){
    plinko.push(new plinkos(j,375))
  } 
   
  for (var  j=15 ;j < particles.length ; j=++){
    plinko[j].display()
  }
  for (var  k=0 ; k < divisions.length ; k=++){
    divisions[k].display()
  }
 

  drawSprites();
}