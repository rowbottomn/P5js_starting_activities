var eye_size;
var blink;

function setup() {
  createCanvas(400, 400);

  eye_size = 50;
  blink = true;
}

function draw() {
  background(220);
  textSize(40);
  textAlign(CENTER);
  text("Hello World!", 200, 100);

  fill(55, 255, 55); //set the fill
  noStroke(); //turn off outlines
  ellipse(200, 300, 200, 150); //face
  ellipse(200, 250, 150, 100); //head

  stroke(0); //black outlines
  strokeWeight(3); //thicker outline
  fill(255); //white filling

  ellipse(170, 260, 50, eye_size); //left eye
  ellipse(230, 260, 50, eye_size); //right eye

  fill(0); //black fill for the pupils
  ellipse(170, 260, 20, eye_size / 2.5); //left pupil
  ellipse(230, 260, 20, eye_size / 2.5); //right eye

  line(150, 320, 250, 320); //the mouth
  noStroke(); //for the text

  
  //blink is the variable to check if the frog can blink   (if his eyes are open or closed)
 
  if (blink == true) {  //if (blink == true)     if blink is true, its eyes are open
    
      if (eye_size > 4) {  //if (eye_size > 4)    if its eyes are open (wider than 4 tall)
        
        eye_size -= 1;  //eye_size -= 1      closes his eyes slowly
        
    }else if (eye_size <= 4) { //Checks if they eyes are closed, then tells them to start opening
      
        blink = false;  //Tells the frog to open its eyes
      
    }
    
  } else if (blink == false) {  //if (blink == false)    if blink is false, his eyes are closed
    
    
      if (eye_size < 50) { //if (eye_size < 50)    if its eyes are closed (less than 50 tall)
        
        
        eye_size += 1; //eye_size += 1   opens his eyes slowly
        
        
    } else if (eye_size >= 50) {  //if (eye_size > 50)    If the eyes are completely open
      
        blink = true;  //Tells the frog to close its eyes
    }
  }
  
}
