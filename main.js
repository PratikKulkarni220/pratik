image1 =  "";

function preload(){
        image1 = loadImage("carImage.jpeg");
}

function draw(){
    image(image1,0 , 0 , 600 , 600);
    // fill("red");
   //  text("Car:", 100, 110);
  //   stroke("black");
   //  noFill();
   //  rect(100 , 100 , 200 , 400);
   ///  stroke("black");
  //   fill("red");
    // noFill();
   //  stroke("red");
   ///  text("Car:", 300, 80);
  //   rect(290 , 56, 250 , 250);
}

function setup(){
    canvas = createCanvas(600, 600);
    canvas.position(550, 300);
    
    cocossdModel = ml5.objectDetector('cocossd'  , loaded); 
    document.getElementById("status_id").innerHTML="Status: Detecting object";

    cocossdModel.detect(image1 , gotResults);
}

status = "";
objects = [];

function loaded(){
    console.log('Model Loaded');
     status = true;
}


function gotResults(error , results){
    if( error){
        console.error(error);
        }else
        console.log(results);
        objects = results;

        for(i = 0; i<objects.length; i++){
            document.getElementById('status_id').innerHTML = "Status: Object(s) Identified";
            
            fill("blue");
            
            percent = floor(objects[i].confidence *100);
            
            text(objects[i].label + '' + percent + '%', objects[i].x,objects[i].y+ 10);
            
            stroke("green");
            
            noFill();
            
            rect(objects[i].x, objects[i].y , objects[i].width , objects[i].height);
                }

}