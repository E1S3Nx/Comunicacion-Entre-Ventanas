let ventanaSecundaria;

// Abrir la ventana secundaria y enviar el mensaje
function abrirVentanaSecundaria() {
    const mensaje = document.getElementById("mensaje").value;

    // Mostrar el mensaje en la ventana principal
    mostrarMensajeEnChat(mensaje, "sent");

    // Abrir la ventana secundaria si aún no está abierta
    if (!ventanaSecundaria || ventanaSecundaria.closed) {
        ventanaSecundaria = window.open('ventanaSecundaria.html', 'ventanaSecundaria');
    }

    // Esperar a que la ventana secundaria se abra completamente y enviar el mensaje
    ventanaSecundaria.onload = function () {
        ventanaSecundaria.document.getElementById('mensajeRecibido').innerText = mensaje;
    };

    // Limpiar el campo de entrada
    document.getElementById("mensaje").value = "";
}

// Función para mostrar los mensajes en el chat
function mostrarMensajeEnChat(mensaje, tipo) {
    const chatBox = document.getElementById("chatBox");
    const mensajeElemento = document.createElement("div");
    mensajeElemento.classList.add("message");

    if (tipo === "sent") {
        mensajeElemento.classList.add("message-sent");
    } else {
        mensajeElemento.classList.add("message-received");
    }

    mensajeElemento.innerText = mensaje;
    chatBox.appendChild(mensajeElemento);

    // Desplazarse hacia abajo automáticamente cuando se envía o recibe un mensaje
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Función para recibir la respuesta de la ventana secundaria
function recibirRespuesta(respuesta) {
    mostrarMensajeEnChat(respuesta, "received");
}

