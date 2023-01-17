let startTime = 0, endTime = 0;

let images = ['../../assets/images/imageClassification/1.jpeg',
    '../../assets/images/imageClassification/2.jpeg',
    '../../assets/images/imageClassification/3.jpeg',
    '../../assets/images/imageClassification/4.jpeg']
console.log(images)
let Spinner = document.getElementById('spinner');
// let cardDiv0 = document.getElementById('card0');

// console.log("cardDiv0", cardDiv0)
// cardDiv0.style.display = "none";

Spinner.style.display = "none";
const startWorkload = async (backend) => {
    console.log("startWorkload:" + backend);
    if (backend == "WEBGL") {
        Spinner.style.display = "block";
        tf.setBackend("webgl");
    } else if (backend == "CPU") {
        Spinner.style.display = "block";
        tf.setBackend("cpu");
    } else if (backend == "WASM") {
        Spinner.style.display = "block";
        tf.setBackend("wasm");
    }
    console.log("Version:");
    console.log(tf.version.tfjs);
    console.log("Backend:");
    selectedBackend = tf.getBackend();
};

let getCurrentTime = () => {
    if ("performance" in window == true) {
        return performance.now();
    }
    return new Data().getTime();
}
const imgPrediction = async () => {
    const imgCount = 4;
    const prediction = await mobilenet.load();
    let imageValue = [];
    startTime = getCurrentTime();
    for (let i = 0; i < imgCount; i++) {
        let img = document.getElementById('img' + i);
        console.log("img", img)
        let imgsize = await prediction.classify(img);
        imageValue.push(imgsize);
        console.log("imageValue", imageValue)
    }

    imgtxt(imageValue);
    endTime = getCurrentTime();
}
let imgtxt = (imageValue) => {
    let value = [];
    imageValue.map(element => {
        console.log(element, 'element');
        const finalvalue = element.reduce((prev, current) => (+prev.probability > +current.probability) ? prev : current);
        value.push(finalvalue);
    });

    let i = 0;
    value.forEach((index, i) => {
        let elList = document.getElementById('imgval' + i);
        elList.innerHTML = index.className;
    })
}
const durationTime = async () => {
    await imgPrediction();
    const duration = (endTime - startTime);
    document.getElementById('durationTime').innerHTML = 'Total Duration: ' + Math.round(duration).toString() + ' ms';
    Spinner.style.display = "none";
    for (let x = 0; x < images.length; x++) {
        const element = '<img src="' + images[x] + '">'
        document.querySelector('.images').innerHTML += element;
    }
    return duration;
}
function selectedBackend(value) {
    Spinner.style.display = "block";
    if (value != 'select') {
        startWorkload(value);
        durationTime();
    }

}