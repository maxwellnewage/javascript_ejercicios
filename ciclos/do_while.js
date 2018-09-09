// Solicitar una contraseña hasta que la misma sea correcta.

var inputPassword = prompt("contraseña?");

if (inputPassword != '1234') {
    do {
        alert("Contraseña incorrecta, por favor volver a intentar");
        var inputPassword = prompt("contraseña?");
    } while (inputPassword != '1234');

    alert("Te costó, pero lo lograste!");
} else {
    alert("Acertaste a la primera!");
}