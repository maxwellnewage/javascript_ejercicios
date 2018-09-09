// Sumar un numero recursivamente mientras sea menor a 10.

function calcular(num1) {
    var res = num1 + 2;

    if (res < 10) {
        return calcular(res);
    } else {
        return res;
    }
}

console.log(calcular(1));