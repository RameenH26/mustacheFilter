function preload() {
 mustache = loadImage("https://i.postimg.cc/yNNZXts3/Untitled.png");
}
 function setup() {
     canvas = createCanvas(300, 300);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(300, 300);
     video.hide();

     poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
 function draw() {
    image(video, 0 ,0, 300, 300);
    image(mustache, underNoseX - 50, underNoseY - 29, 100, 100);
 }

 function take_snapshot() {
     save('Mustache.png');
 }
 function modelLoaded() {
    console.log('PoseNet is initialized');
}
underNoseX = 0;
underNoseY = 0;

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        underNoseX = results[0].pose.nose.x;
        underNoseY = results[0].pose.nose.y;
        console.log("underNose x = " + underNoseX);
        console.log("underNose y = " + underNoseY);
    }
}
