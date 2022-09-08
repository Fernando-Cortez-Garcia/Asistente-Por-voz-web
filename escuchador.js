const recoding = new webkitSpeechRecognition();
recoding.lang = 'es-ES';
recoding.continuous = false;
recoding.interimResults = true;
recoding.onresult = function(event) {
    const result = event.results[event.resultIndex];
    if (result.isFinal) {
        //agregar valor al input
        document.getElementById("text").value = result[0].transcript;
        //abrir wikipedia con el resultado y agregarlo al inframe
        document.getElementById("iframe").src = "https://es.wikipedia.org/wiki/" + result[0].transcript;


    }
};

let areaText = document.getElementById('text');
areaText.addEventListener('click', function() {
    limpiarinput();
    recoding.start();
    areaText.placeholder = 'Escuchando...';
});

function limpiarinput() {
    document.getElementById("text").value = "";
}

function abrirMaps() {

}