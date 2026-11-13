//Obtener los elementos del DOM por su ID
const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const tablaBody = document.getElementById("tabla-body");

//Variable de estado para el contador
let likes = 0;

//Boton de reinicio del contador
const botonReset = document.getElementById("btn-reset");

botonReset.addEventListener("click", () => {
    likes = 0;
    textoContador.textContent = likes;
    textoContador.style.color = "#3498db"; // vuelve al color azul original
    tablaBody.innerHTML = ""; // borra todas las filas
});

//Escuchar el evento 'click' y manipular el DOM
boton.addEventListener("click", () => {
    //Incrementar el contador
    likes++;

    //Actualizar el texto del contador en el DOM
    textoContador.textContent = likes;

    if (likes > 10) {
        textoContador.style.color = "#e74c3c"; // Rojo
    } else {
        textoContador.style.color = "#3498db"; // Azul original
    }
    
    //Capturar la hora exacta del sistema
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");
    const segundos = String(ahora.getSeconds()).padStart(2, "0");
    const horaFormateada = `${horas}:${minutos}:${segundos}`;

    //Crear nueva fila de forma dinámica
    const nuevaFila = document.createElement("tr");

    //Celda del número de clic
    const celdaNumero = document.createElement("td");
    celdaNumero.textContent = likes;

    //Celda de la hora
    const celdaHora = document.createElement("td");
    celdaHora.textContent = horaFormateada;

    //Agregar las celdas a la fila
    nuevaFila.appendChild(celdaNumero);
    nuevaFila.appendChild(celdaHora);

    //Insertar la nueva fila al INICIO del tbody (los más recientes arriba)
    tablaBody.insertBefore(nuevaFila, tablaBody.firstChild);
});