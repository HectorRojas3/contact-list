/* 1. Crea una lista de contactos con datos predefinidos, 
cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
2. Crea una función para añadir un nuevo contacto a una lista
3. Crea una función para borrar un contacto existente de la lista
4. Crea una función para imprimir en consola los contactos presentes en la lista
5. Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1 y compártelo con nosotros. 👍🏼⬇️ */

// step 1
/* Contactos representados como objetos */
let listaDeContactos = [
    {
        ID: 1,
        Nombres: "Lidia",
        Apellidos: "Dole",
        Telefono: "123123123123",
        Ubicacion: {
            Ciudad: "El Progreso",
            Direccion: "Barrio El Benque"
        }
    },
    {
        ID: 2,
        Nombres: "Jonatan",
        Apellidos: "Rojas",
        Telefono: "321321321321",
        Ubicacion: {
            Ciudad: "Chicago",
            Direccion: "Kevin's Home"
        }
    },
    {
        ID: 3,
        Nombres: "Hada",
        Apellidos: "Rodriguez",
        Telefono: "456456456456",
        Ubicacion: {
            Ciudad: "Puerto Cortes",
        Direccion: "Colonia Palermo"
    }
    },
    {
        ID: 4,
        Nombres: "Salvador",
        Apellidos: "Ramos",
        Telefono: "654654654654",
        Ubicacion: {
            Ciudad: "Palma de la Gran Canaria",
            Direccion: "Muelle"
    }
    },
    {
        ID: 5,
        Nombres: "Pamela",
        Apellidos: "Ramos",
        Telefono: "789789789789",
        Ubicacion: {
            Ciudad: "Miami",
            Direccion: "Dade"
    }
    },
    {
        ID: 6,
        Nombres: "Axel",
        Apellidos: "Ramos",
        Telefono: "789789789789",
        Ubicacion: {
            Ciudad: "Sidney",
            Direccion: "P. Sherman Calle Wallaby 42"
    },
    },
    ];

// step 2
function nuevoContacto (listaDeContactos, newContact) {
    listaDeContactos.push(newContact);
}

//nuevoContacto(listaDeContactos, "Hector Rojas");

// step 3
/* function borrarContacto (listaDeContactos) {
    if (listaDeContactos.length === 0) {
        console.log("no hay contacto para borrar")
    } else {
    const indiceAleatorio = Math.floor(Math.random() * listaDeContactos.length);
    listaDeContactos.splice(indiceAleatorio, 1)
    }
} */
//Eliminar contacto por ID
function borrarContacto(listaDeContactos, id){
    const indice = listaDeContactos.findIndex((contacto) => contacto.ID === id);
    if (indice !== -1) {
        listaDeContactos.splice(indice, 1);
        console.log(`El contacto numero ${id} abandonó el grupo`);
    } else {
        console.log(`No se encuentra un contacto con el numero ${id}`);
    }
}

// step 4
/* mostrar lista de contactos en consola  */
function mostrarEnConsola (listaDeContactos) {
    console.log("Lista de Contactos Actualizada:");
    listaDeContactos.forEach((contacto) => { 
    console.log(`ID: ${contacto.ID}`);
    console.log(`Nombres: ${contacto.Nombres}`);
    console.log(`Apelllidos: ${contacto.Apellidos}`);
    console.log(`Telefono: ${contacto.Telefono}`);
    if(contacto.Ubicacion){
        console.log(`Ubicaciones: Ciudad: ${contacto.Ubicacion.Ciudad}, Direccion: ${contacto.Ubicacion.Direccion}`
            );
        }
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
    ID: 3,
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

// Eliminando contacto por su id
borrarContacto(listaDeContactos, 2);
mostrarEnConsola(listaDeContactos);