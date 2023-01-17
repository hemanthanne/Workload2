function changeLanguage(value) {
    if (value === 'english') {
        document.getElementById('navTitle').innerHTML = "Experimental AI Workloads";
        document.getElementById('ImgClsTFCH').innerHTML = "Image classification (Tensor Flow)";
        document.getElementById('ImgClsTFCB').innerHTML = "Classify images with labels from the ImageNet database (MobileNet).";
        document.getElementById('ImgClsTFCH2').innerHTML = "Natural language question answering (Tensor Flow)";
        document.getElementById('ImgClsTFCB2').innerHTML = "Answer questions based on the content of a given passage of text using BERT.";
        document.getElementById('ImgClsTFCH3').innerHTML = "Natural language question answering (Tensor Flow)";
        document.getElementById('ImgClsTFCB3').innerHTML = "Change Language.";
        document.getElementById('ImgClsTFCH4').innerHTML = "Image classification (ONNX Runtime)";
        document.getElementById('ImgClsTFCB4').innerHTML = "Classify images with labels from the ImageNet database (MobileNet).";
        document.getElementById('ImgClsTFCH5').innerHTML = "Natural language question answering (ONNX Runtime)";
        document.getElementById('ImgClsTFCB5').innerHTML = "Answer questions based on the content of a given passage of text using BERT.";
        document.getElementById('ImgClsTFCH6').innerHTML = "Natural language question answering (ONNX Runtime)";
        document.getElementById('ImgClsTFCB6').innerHTML = "Change Language.";
    } else if (value === 'chinese') {
        document.getElementById('navTitle').innerHTML = "实验性人工智能工作负载"
        document.getElementById('ImgClsTFCH').innerHTML = "图像分类（张量流）"
        document.getElementById('ImgClsTFCB').innerHTML = "使用来自 ImageNet 数据库 (MobileNet) 的标签对图像进行分类.";
        document.getElementById('ImgClsTFCH2').innerHTML = "自然語言問答(Tensor Flow)";
        document.getElementById('ImgClsTFCB2').innerHTML = "使用 BERT 根據給定文本段落的內容回答問題";
        document.getElementById('ImgClsTFCH3').innerHTML = "自然語言問答(Tensor Flow)";
        document.getElementById('ImgClsTFCB3').innerHTML = "改变语言.";
        document.getElementById('ImgClsTFCH4').innerHTML = "图像分类 (ONNX 运行时）";
        document.getElementById('ImgClsTFCB4').innerHTML = "使用来自 ImageNet 数据库 (MobileNet) 的标签对图像进行分类.";
        document.getElementById('ImgClsTFCH5').innerHTML = "自然语言问答 (ONNX Runtime)";
        document.getElementById('ImgClsTFCB5').innerHTML = "使用 BERT 根据给定文本段落的内容回答问题.";
        document.getElementById('ImgClsTFCH6').innerHTML = "自然语言问答 (ONNX Runtime)";
        document.getElementById('ImgClsTFCB6').innerHTML = "改变语言.";
    } else if (value === 'german') {
        document.getElementById('navTitle').innerHTML = "Experimentelle KI-Workloads";
        document.getElementById('ImgClsTFCH').innerHTML = "Bildklassifizierung (Tensor Flow)";
        document.getElementById('ImgClsTFCB').innerHTML = "Klassifizieren Sie Bilder mit Labels aus der ImageNet-Datenbank (MobileNet).";
        document.getElementById('ImgClsTFCH2').innerHTML = "Beantwortung von Fragen in natürlicher Sprache (Tensor Flow)";
        document.getElementById('ImgClsTFCB2').innerHTML = "Beantworten Sie Fragen basierend auf dem Inhalt einer bestimmten Textpassage mit BERT.";
        document.getElementById('ImgClsTFCH3').innerHTML = "Beantwortung von Fragen in natürlicher Sprache (Tensor Flow)";
        document.getElementById('ImgClsTFCB3').innerHTML = "Sprache ändern.";
        document.getElementById('ImgClsTFCH4').innerHTML = "Bildklassifizierung (ONNX Runtime)";
        document.getElementById('ImgClsTFCB4').innerHTML = "Klassifizieren Sie Bilder mit Labels aus der ImageNet-Datenbank (MobileNet).";
        document.getElementById('ImgClsTFCH5').innerHTML = "Beantwortung von Fragen in natürlicher Sprache (ONNX Runtime)";
        document.getElementById('ImgClsTFCB5').innerHTML = "Beantworten Sie Fragen basierend auf dem Inhalt einer bestimmten Textpassage mit BERT.";
        document.getElementById('ImgClsTFCH6').innerHTML = "Beantwortung von Fragen in natürlicher Sprache (ONNX Runtime)";
        document.getElementById('ImgClsTFCB6').innerHTML = "prache ändern.";
    }
}

function getSelWorkLoadValue() {
    let ImgClassificationID = document.getElementById('ImgClassificationID');
    console.log("checkValue", ImgClassificationID.checked);
}

console.log("checkValue2");
