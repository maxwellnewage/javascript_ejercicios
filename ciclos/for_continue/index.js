// Recorrer los numeros del 1 al 5 pero saltear el 3.

for (var i = 1; i < 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}