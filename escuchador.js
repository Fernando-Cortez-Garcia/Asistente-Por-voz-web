const recoding = new webkitSpeechRecognition();
recoding.lang = 'es-ES';
recoding.continuous = true;
recoding.interimResults = true;
recoding.onresult = function(event) {
    const result = event.results[event.resultIndex];
    if (result.isFinal) {
        //agregar valor al input
        document.getElementById("text").value = result[0].transcript;
        areaText.innerHTML = result[0].transcript;
        window.open(`https://www.google.com/search?q=${result[0].transcript}`);
    }
};

let areaText = document.getElementById('text');
areaText.addEventListener('click', function() {
    recoding.start();
    areaText.placeholder = 'Escuchando...';
});

function abriryotube() {
    window.open("+");
    //www.youtube.com/embed/
}