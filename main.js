// https://teachablemachine.withgoogle.com/models/wgP9SNOf_/
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 100

});
Webcam.attach("#camera")
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';

    })
}

console.log("ML5 version- ",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GS5Eihy8t/model.json",modelloded)

function modelloded(){
    console.log("modelloaded")
}

function check(){
    img = document.getElementById("capture_image");
    classifier.classify(img,gotresult);
    
}
function gotresult(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=(results[0].confidence.toFixed(3))*100+"%";

    }
}





















































