
const imgCount = 4;
let startTime = 0, endTime = 0, imageValue = [], finalImgPredictions = [];

document.querySelector("#backendDP").value = "webgl";

// this function will be triggered on change of value in dropdown.
$("#backendDP").change(async function () {
    imageValue.length = 0;
    finalImgPredictions.length = 0;
    let value = $(this).val();
    console.log("value", value);
    await tf.setBackend(value)
    console.log("backend", tf.getBackend())
    imgPrediction()
});


// this function will predict the image.
const imgPrediction = async () => {
    // Load the MobileNet model
    const model = await mobilenet.load();
    startTime = getCurrentTime()
    for (let i = 0; i < imgCount; i++) {
        let img = document.getElementById('img' + i);
        const predictions = await model.classify(img);
        imageValue.push(predictions);
        console.log("imageValue", imageValue)
    }
    // getting final prediction of an image
    imageValue.map(element => {
        const finalPrediction = element.reduce((prev, current) => (+prev.probability > +current.probability) ? prev : current);
        finalImgPredictions.push(finalPrediction);
    });

    // assign names for an image
    finalImgPredictions.forEach(async (imgVal, imgIcr) => {
        let finalImg = document.getElementById('imgval' + imgIcr);
        finalImg.innerHTML = imgVal.className;
        // Hide spinner
        $("#spinner").hide();
        $("#spinner1").hide();
        $("#spinner2").hide();
        $("#spinner3").hide();
    })
    endTime = getCurrentTime();
    durationTime();
}

// current time.
let getCurrentTime = () => {
    if ("performance" in window == true) {
        return performance.now();
    }
    return new Data().getTime();
}

// total duration
const durationTime = async () => {
    const duration = (endTime - startTime);
    document.getElementById('durationTime').innerHTML = 'Total Duration: ' + Math.round(duration).toString() + ' ms';
}

// this function will be called by itself(IIFE)
(function init() {
    // Show spinner
    $("#spinner").show();
    $("#spinner1").show();
    $("#spinner2").show();
    $("#spinner3").show();
    let text = $("#backendDP option:selected").text();
    tf.setBackend(text.toLowerCase());
    console.log("backend", tf.getBackend())
    imgPrediction()
}())
