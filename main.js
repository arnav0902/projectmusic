song1="yt1s.com - Doremon Song Lyrics  Zindagi Sawaar Du.mp3";
song2="yt1s.com - Shinchan Theme Song LYRICS.mp3"
function preload(){
song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
image(video,0,0,600,500);
}
