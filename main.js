nosex=0;
nosey=0;
function preload(){
 pot=loadImage("https://image.shutterstock.com/image-photo/clown-nose-isolated-on-white-260nw-1176836008.jpg");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300.300);
    video.hide();
    bot=ml5.poseNet(video,modelloaded);
    bot.on("pose",getanswer);
}
function modelloaded(){
    console.log("model is loaded");
}
function table(){
    save('taj.png');
}
function getanswer(results){
    if(results.length>0){
        console.log(results);
        console.log("nose_x= "+results[0].pose.nose.x);
        console.log("nose_y= "+results[0].pose.nose.y);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
    }
    
}
function draw(){
    image(video,0,0,300,300);
    image(pot,nosex,nosey,30,30);
    }