function Person(firstName, lastName, age, dni) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.dni = dni;
    this.arr = [
        'element 1', 'element 2', 'element 3'
    ]
}

var person = prompt("Datos de la persona?");
var pAtrs = person.split(' ');

var personInstance = new Person(pAtrs[0], pAtrs[1], pAtrs[2], pAtrs[3]);

if (localStorage.getItem("person")) {
    var personStorage = localStorage.getItem("person");

    console.log(personStorage);

    var personObj = JSON.parse(personStorage);

    var name = prompt("modificando nombre");

    personObj.name = name;

    localStorage.setItem("person", JSON.stringify(personObj));
} else {
    localStorage.setItem("person", JSON.stringify(personInstance));
    alert("Usuario Creado!");
}