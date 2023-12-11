function preload() {
    
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
    image(video,0,0,300,300)}
function take_snapshot() {
    save('my_selfie.png')
}
function model_loaded() {
    console.log("postnet model is loaded")
}
function got_poses(results) {
    if (results.length>0) {
        console.log(results)
        console.log("mouth x=" + results[0].pose.nose.x)
        console.log("mouth y=" + results[0].pose.nose.y)
    }
}