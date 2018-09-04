var usuario = {
    name: '',
    gender: '',
    age: '',
}

var sexo = '';

usuario.name = prompt('¿Cual es tu nombre?');
sexo = prompt('¿Cual es tu sexo?').toLowerCase();
usuario.age = parseInt(prompt('¿Cual es tu edad?'));

if (sexo === 'hombre' || sexo === 'sr' || sexo === 'varón') {
    usuario.gender = 'Sr';
} else if (sexo === 'mujer' || sexo === 'sra') {
    usuario.gender = 'Sra';
} else {
    usuario.gender = 'Sx';
}

if (usuario.age >= 18) {
    console.log(usuario.gender + ' ' + usuario.name + ' usted es mayor de edad puede ingresar')
} else {
    console.log(usuario.gender + ' ' + usuario.name + ' usted es menor de edad no puede ingresar')
}