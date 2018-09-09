// While vs Do While

var color = "rojo";

do {
    color = prompt("color?");
} while (color != "rojo")

while (color === "rojo") {
    confirmacion = prompt("seguro?");

    if (confirmacion === "n")
        color = "verde";
}

alert("cambio de color!");