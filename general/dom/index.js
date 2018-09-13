var parrafo = document.getElementById("parrafo");
var parrafos = document.getElementsByClassName("parrafos");

parrafo.innerHTML = "Algo " + parrafo.innerHTML;

for (var i = 0; i < parrafos.length; i++) {
    parrafos[i].innerHTML = "Modificando todo!";
}

var divNode = document.createElement('div')
var pNode = document.createElement('p');

pNode.innerHTML = "esto es un nodo dentro de div";

divNode.appendChild(pNode);

document.body.appendChild(divNode);

setTimeout(function() {
    document.body.removeChild(divNode);
}, 3000);

var paragraph = document.getElementById('paragraph');

var h1Node = document.createElement('h1');
h1Node.innerHTML = 'Soy un título';

paragraph.parentNode.parentNode.appendChild(h1Node);

var titleNode = document.getElementById('title');

setTimeout(function() {
    titleNode.id = 'title-green';
    titleNode.innerHTML = '$40';
}, 3000);

function randomStyle() {
    var styles = [
        'title-red',
        'title-green',
        'title-blue'
    ];

    var index = Math.floor(Math.random() * styles.length);
    return styles[index];
}

setInterval(function() {
    titleNode.id = randomStyle();
    titleNode.innerHTML = '$40';
}, 100);