//corre solo una vez cuando inicia el programa
function setup(){
    console.log("setup");
    
    //createCanvas: ancho, alto en píxeles
    createCanvas(200,200);
    background(125);
   
}

//corre continuamente después de la función setup
function draw(){
    clear ();
    console.log("draw - FrameCount:"+ frameCount);
    console.log("mouseX" + mouseX + " , mouseY" + mouseY);
    ellipse(mouseX,mouseY,25,25);

    if (mouseX<100 && mouseY<100){
        fill(color('green'));
    }else if (mouseX>100 && mouseY<100){
        fill(color('red'));
    }else if (mouseX<100 && mouseY>100){
        fill(color('blue'));
    }else if (mouseX>100 && mouseY>100){
        fill(color('yellow'));
    }
}
