
noseX = 0
noseY = 0

function preload() {
    nariz = loadImage("https://i.postimg.cc/FK4tT3Jh/Clown-Nose-Download-PNG-Image.png")
}
function setup() {
    canvas = createCanvas(400, 300)
    canvas.center();
    video = createCapture(VIDEO)
    video.size(400, 300)
    video.hide()
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on('pose', gotPoses)
}
function draw() {
    image(video, 0, 0, 400, 300)
    //fill("red")//
    //circle(noseX, noseY, 20)//
    image(nariz , noseX-15, noseY-10, 30 , 30)
}
function takeSnapshot() {
    save('Filtro.png')
}

function modelLoaded() {
    console.log("funcionou")
}

function gotPoses(results) {
    console.log(results);
    if (results.length > 0) {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }

}