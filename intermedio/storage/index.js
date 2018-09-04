var name = prompt("Tu nombre?");

var storagedName = localStorage.getItem("name");

if (storagedName) {
    alert("Ya se tu nombre! Es " + storagedName);
} else {
    localStorage.setItem("name", name);
    alert("Tu nombre fue registrado!");
}