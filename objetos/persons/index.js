// Crear un array del objeto Persona con persistencia en adicion

var list = [];
var exit = false;

while (exit === false) {
    var name = prompt("nombre?");
    var age = prompt("edad?");
    var gender = prompt("genero?");

    list.push(new Person(name, age, gender));

    var cont = prompt("continuar?");

    if (cont === "n")
        exit = true;
}


function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}