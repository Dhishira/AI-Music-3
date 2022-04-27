song_1 = "";
song_2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload()
{

}

function setup()
{
  canvas = createCanvas(600,325);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();

  posenet = ml5.poseNet(video,modelLoaded);
  posenet.on('pose',gotposes);
}

function modelLoaded()
{
  console.log("Posenet is Intialized!");
}

function gotposes(results)
{
  if(results.length > 0)
  {
    console.log(results);
    
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftwristX - " + leftWristX+ "leftwristY - " + leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightwristX - " + rightWristX+ "rightwristY - " + rightWristY);
  }
}

function draw()
{
  image(video,0,0,600,500);
}
