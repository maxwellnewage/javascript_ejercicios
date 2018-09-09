// Crear un objeto Persona con metodos y atributos a traves de una funcion constructora

var tom = new Person("Tom", 28, "m");

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    var car = false;

    this.walk = function() {
        return "Estoy caminando";
    };

    this.older = function() {
        if (age > 17)
            return "Es mayor de edad porque tiene " + this.age;
        else
            return "Es menor!";
    };

    this.getCar = function() {
        if (this.car)
            return "Tiene auto"
        else
            return "No tiene auto"
    };

    this.setCar = function(car) {
        this.car = car;
    };
}