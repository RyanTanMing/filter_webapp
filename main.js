noseX=""
noseY=""
function preload() {
    clown_nose=loadImage("https://i.postimg.cc/N0Zdq2hZ/Moustache-PNG-Pic.png")
}
function setup() {
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    postnet=ml5.poseNet(video,model_loaded)
    postnet.on('pose',got_poses)
}
function draw() {
    image(video,0,0,300,300)
    fill("red")
    stroke("red")
//circle(noseX,noseY,20)
image(clown_nose,noseX - 35,noseY -10,75,50)


}
function take_snapshot() {
    save('my_selfie.png')
}
function model_loaded() {
    console.log("postnet model is loaded")
}
function got_poses(results) {
    if (results.length>0) {
        console.log(results)
        console.log("nose x=" + results[0].pose.nose.x)
        console.log("nose y=" + results[0].pose.nose.y)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y

    }
}