function guardar() {
    class Animal {
        constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
    }
    var nombreGuardar = document.getElementById("nombre").value;
    var edadGuardar = document.getElementById("edad").value;

    nuevoAnimal = new Animal(nombreGuardar, edadGuardar);
    console.log(nuevoAnimal);
    agregar();
}

var baseDeDatos = [];
function agregar() {
    baseDeDatos.push(nuevoAnimal);
    console.log(baseDeDatos);
    document.getElementById("tabla").innerHTML += '<tbody><td>' + nuevoAnimal.nombre + '</td><td>' + nuevoAnimal.edad + '</td></tbody>'
};