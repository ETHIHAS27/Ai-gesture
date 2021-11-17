noseX = 0
noseY = 0
rightX = 0
leftX = 0
difference = 0

function preload(){

}

function draw(){
    background("#403c37")

    fill("#fc030f")
    stroke("#fc030f")
    square(noseX,noseY,difference)
    document.getElementById("square_sides").innerHTML = "Width and Height of the Square is " + difference + "px";
}

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,120)

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotResults)

    
}

function modelLoaded(){
    console.log("Posenet is Inisialised!")
}

function gotResults(results){
    if (results.length > 0){

        console.log(results);

    
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nose x = " + noseX + "nose y = " + noseY);

        rightX = results[0].pose.rightWrist.x
        leftX = results[0].pose.leftWrist.x

        difference = floor(leftX - rightX);

        console.log("diffrence = " + difference);
    }
}