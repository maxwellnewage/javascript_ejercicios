// Solicitar 5 alumnos, agregarlos a un array y luego mostrarlos.

var alumnos = [];

do {
    alumno = prompt('Ingrese un alumno. (max 5)');
    alumnos.push(alumno);
} while (alumnos.length <= 4);

for (var i = 0; i < alumnos.length; i++) {
    console.log("Alumno: " + alumnos[i]);
}