function setup() {
    createCanvas(400, 400);
}
  
function draw() {
    background(220);
    textSize(40);
    textAlign(CENTER)
    text("Hello World!", 200, 100 );

    fill(55,255,55);//set the fill 
    noStroke();//turn off outlines
    ellipse(200,300,200,150);//face
    ellipse(200,250,150,100);//head

    stroke(0);//black outlines
    strokeWeight(3); //thicker outline
    fill(255); //white filling

    ellipse(170, 260, 50, 50);//left eye
    ellipse(230, 260, 50, 50);//right eye

    fill(0); //black fill for the pupils
    ellipse(170, 260, 20, 20);//left pupil
    ellipse(230, 260, 20, 20);//right eye

    line(150, 320, 250, 320); //the mouth
    noStroke();//for the text
}