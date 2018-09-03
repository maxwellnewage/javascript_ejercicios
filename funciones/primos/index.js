// Crear una funcion recursiva para calcular numeros primos

var num = prompt("numero?");

var prime = isPrime(num);

if (prime)
    console.log("Es primo");
else
    console.log("Es compuesto");

function isPrime(n, hn) {
    // si el contador (hn) es igual a 0 o 1, es primo
    if (hn === 0 || n === 1) {
        return true;
    }

    // se divide hn
    hn = hn || parseInt(n / 2);

    /* si el modulo de hn es igual a cero,
     * y hn no es 1, entonces es compuesto
     * sino, se vuelve a llamar recursivamente
     * restando al contador uno.
     */
    if (n % hn === 0 && hn !== 1) {
        return false;
    } else {
        return isPrime(n, hn - 1);
    }
}