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
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        prediction = results[0].label;
        speak();
        if(results[0].label == "Raised Hand")
        {
            document.getElementById("update_gesture").innerHTML = "&#9995;"+"Silence or Can I say something";
        }
        if(results[0].label == "Vulcan Salute")
        {
            document.getElementById("update_gesture").innerHTML = "&#128406;"+"Live long and prosper, friends";
        }
        if(results[0].label == "Ok")
        {
            document.getElementById("update_gesture").innerHTML = "&#128076;"+"Ok no problem";
        }
        if(results[0].label == "Victory")
        {
            document.getElementById("update_gesture").innerHTML = "&#9996;"+"This is a great victory";
        }
        if(results[0].label == "Crossed Fingers")
        {
            document.getElementById("update_gesture").innerHTML = "&#129310;"+"Wishing for something";
        }
        if(results[0].label == "Love-You Gesture")
        {
            document.getElementById("update_gesture").innerHTML = "&#129311;"+"I love you";
        }

        function speak() 
        {   var synth = window.speechSynthesis;
            speak_data_1 = "The first prediction is" + prediction;
            var utterThis = new SpeechSynthesisUtterance_(speak_data);
            synth.speak(utterThis);
        }
