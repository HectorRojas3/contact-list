/* 1. Crea una lista de contactos con datos predefinidos, 
cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
2. Crea una función para añadir un nuevo contacto a una lista
3. Crea una función para borrar un contacto existente de la lista
4. Crea una función para imprimir en consola los contactos presentes en la lista
5. Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1 y compártelo con nosotros. 👍🏼⬇️ */

// step 1
let listaDeContactos = ["Lidia Dole", "Jonata Rojas", "Hada Rodriguez", "Salvador Ramos", "Pamela Ramos", "Axel Ramos",];

// step 2
function nuevoContacto (listaDeContactos, newElement ) {
    listaDeContactos.push(newElement);
}

nuevoContacto(listaDeContactos, "Hector Rojas");

// step 3
function borrarContacto (listaDeContactos) {
    if (listaDeContactos.length === 0) {
        console.log("no hay contacto para borrar")
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeContactos.length);
    listaDeContactos.splice(indiceAleatorio, 1)
}

borrarContacto(listaDeContactos);

// step 4
function mostrarEnConsola (listaDeContactos) {
    console.log("Lista de contactos actualizada", listaDeContactos.join(', '));
}

mostrarEnConsola(listaDeContactos);