let amigos = [];
console.log(amigos.length);
    
function agregarAmigo() {

    let nombre = document.getElementById('amigo').value.trim(); //Captura el valor del texto

    //Valida la entrada de datos
    if (nombre === '') {
        alert("Por favor, inserte un nombre."); 
    } else if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
    } else {
        amigos.push(nombre); //Se añade el nombre al array
        console.log(amigos);
        document.getElementById('amigo').value = ''; //Limpia el campo de texto
        listaAmigos();
    }
}
    
function listaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpia la lista 
    

     for (let i = 0; i < amigos.length; i++) { 
         let nuevoNombre = document.createElement('li');
         nuevoNombre.textContent ="-> " + amigos[i] + " <-";
         lista.appendChild(nuevoNombre);
     }
}

function sotearAmigo() {
    if (amigos.length <= 2) {
        alert("Introduzca al menos 3 nombres para jugar");
    } else {
        console.log(amigos.length);
        let posicion = Math.floor(Math.random()*amigos.length); //Tiene la posicion ganadora
        let ganador = amigos[posicion];
        alert("El ganador es: " + ganador)
        borrarLista();
    }  
}

function borrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpia la lista 
    amigos = [''];
    amigos.shift();
    console.log(amigos);
}