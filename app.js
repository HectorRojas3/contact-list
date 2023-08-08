/* 1. Crea una lista de contactos con datos predefinidos, 
cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
2. Crea una función para añadir un nuevo contacto a una lista
3. Crea una función para borrar un contacto existente de la lista
4. Crea una función para imprimir en consola los contactos presentes en la lista
5. Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1 y compártelo con nosotros. 👍🏼⬇️ */

// step 1
let listaDeContactos = ["Lidia Dole", "Jonatan Rojas", "Hada Rodriguez", "Salvador Ramos", "Pamela Ramos", "Axel Ramos",];

// step 2
function nuevoContacto (listaDeContactos, newElement) {
    listaDeContactos.push(newElement);
}

//nuevoContacto(listaDeContactos, "Hector Rojas");

// step 3
function borrarContacto (listaDeContactos) {
    if (listaDeContactos.length === 0) {
        console.log("no hay contacto para borrar")
    } else {
    const indiceAleatorio = Math.floor(Math.random() * listaDeContactos.length);
    listaDeContactos.splice(indiceAleatorio, 1)
    }
}

/* Entregable proyecto integrador
1. Creacion de la branch review-1
2. Agregar funcion para actualizar un contacto
*/

function actualizarContacto (listaDeContactos, id, propiedadesActualizadas) {
    if (contactIndex !== -1) {
        Object.assign(listaDeContactos[contactIndex], propiedadesActualizadas);
        console.log("Contacto actualizado");
    } else {
        console.log("No hay contacto para actualizar");
    }
}

//borrarContacto(listaDeContactos);

// step 4
function mostrarEnConsola (listaDeContactos) {
    console.log("Lista de Contactos Actualizada:");
    listaDeContactos.forEach(contacto => {
        console.log(`ID: ${contacto.identidad}`);
        console.log(`Nombres: ${contacto.nombres}`);
        console.log(`Apellidos: ${contacto.apellidos}`);
        console.log(`Telefono: ${contacto.telefono}`);
        if (contacto.ubicaciones) {
            console.log(`Ubicaciones: Ciudad: ${contacto.ubicaciones.ciudad}, Direccion: ${contacto.ubicaciones.direccion}`);
        }
        console.log("------------------");
    });
}

//mostrarEnConsola(listaDeContactos);


// Proyecto integrador 2. 
/* 1. Ajustar las funciones de crear y eliminar un contacto para que puedan almacenar 
la siguiente info como objetos:
1. id
2. apellidos
3. telefono
4. ubicaciones 
    - ciudad
    - direccion */

let contacto1 = {
    ID: 1804199300160,
    Nombres: "Hector David",
    Apellidos: "Rojas Rodriguez",
    Telefono: "89027851",
    Ubicacion: {
        Ciudad: "El Progreso",
        Direccion: "Palermo"
    }
};

nuevoContacto(listaDeContactos, contacto1);
mostrarEnConsola(listaDeContactos);