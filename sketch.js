var fixedrect,movingrect,fixedrect2,fixedrect1;

function setup(){
  createCanvas(800,400);
  fixedrect=createSprite(200,200,50,80);
  movingrect=createSprite(400,200,80,30);
  fixedrect1=createSprite(200,100,50,50);
  fixedrect2=createSprite(400,100,50,50);
  
fixedrect.shapeColor="blue"
movingrect.shapeColor="blue"
fixedrect1.shapeColor="cyan"
fixedrect2.shapeColor="cyan"
}


function draw(){
  background(0);
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
 if(isTouching(movingrect,fixedrect2)){
  
    fixedrect2.shapeColor="green"
movingrect.shapeColor="green"
  }
  else{
    fixedrect2.shapeColor="blue "
movingrect.shapeColor="blue"

  } 

 
  drawSprites();
}


function isTouching(movingrect,fixedrect){
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
   return true;

    }
    else{
      return false;
    }
    
  }