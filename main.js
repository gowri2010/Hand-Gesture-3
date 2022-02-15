Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
     document.getElementById("result").innerHTML = '<img id="captured_image" src+"'+data_uri+'"/>';
    })
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JUEnG4Qih/model.json', modelloaded);

function modelloaded() {
    console.log('Model Loaded!');
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "Vulcan Salute")
        {
            document.getElementById("update_gesture").innerHTML = "&#128406;"+"Live long and prosper, friends";
        }
        if(results[0].label == "Ok")
        {
            document.getElementById("update_gesture").innerHTML = "&#128076;"+"Ok no problem";
        }
        if(results[0].label == "Love-You")
        {
            document.getElementById("update_gesture").innerHTML = "&#129311;"+"I love you";s
        }
        if(results[0].label == "Crossed Fingers")
        {
            document.getElementById("update_gesture").innerHTML = "&#129310;"+"Wishing for something";
        }
    }  
        
        function speak() 
        {   var synth = window.speechSynthesis;
            speak_data_1 = "The first prediction is" + prediction;
            var utterThis = new SpeechSynthesisUtterance_(speak_data);
            synth.speak(utterThis);
        }
