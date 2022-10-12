function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.centre;

    poseNet = ml5.poseNet(video,modelLoaded);   
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("model is loaded");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log("got poses");
    }

}

