function randomizeStudents() {
    var students = [
        'Ignacio',
        'Gaston',
        'German',
        'Jose'
    ];

    var elements = students.length;
    var index = Math.floor(Math.random() * elements);
    return students[index];
}

var student = document.getElementById("student");
seconds = 3;

var x = setInterval(function() {
    student.innerHTML = seconds;

    if (seconds == 0) {
        student.innerHTML = randomizeStudents();
        clearInterval(x);
    } else {
        seconds--;
    }
}, 1000);