var word = prompt("Dime como te sientes");

if (typeof(word) === "string") {
    if (word.indexOf("bien")) {
        wordUpper = word.toUpperCase();
        alert("Me gusta tu respuesta: " + wordUpper);
    }
} else {
    alert("no tiene mucho sentido que entres aca porque prompt retorna string");
}