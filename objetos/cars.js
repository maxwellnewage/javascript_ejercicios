// Recorrer un array de autos y devolver sus atributos

var cars = [{
        model: 'Suran',
        brand: 'volkswagen',
        year: 2015
    },
    {
        model: 'Audi TT',
        brand: 'Audi',
        year: 2017
    },
    {
        model: 'Gran turismo',
        brand: 'Maserati',
        year: 2018
    }
];

for (var i = 0; i < cars.length; i++) {
    var car = new Car(cars[i].model,
        cars[i].brand, cars[i].year);

    console.log(car.getCarName());
}

function Car(model, brand, year) {
    this.id = Math.floor(Math.random() * 6) + 1;
    this.model = model;
    this.brand = brand;
    this.year = year;

    this.getCarName = function() {
        return this.model + " " +
            this.brand + " " + this.year;
    };
}