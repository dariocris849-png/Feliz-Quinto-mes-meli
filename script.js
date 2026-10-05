/* =========================================
   COMENZAR
========================================= */

function comenzar() {

    const bienvenida =
        document.getElementById("bienvenida");

    const musica =
        document.getElementById("musica");


    /*
    La música comienza después de que
    la persona toca el botón.

    Esto evita el bloqueo de reproducción
    automática de los navegadores.
    */

    musica.volume = 0.35;

    musica.play().catch(() => {
        console.log("La reproducción de audio fue bloqueada.");
    });


    bienvenida.style.animation =
        "aparecer .8s reverse forwards";


    setTimeout(() => {

        bienvenida.style.display = "none";

        mostrarSeccion("carta");

        mostrarSeccion("linea");

        mostrarSeccion("video");

        mostrarSeccion("mensaje");


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 700);

}


/* =========================================
   MOSTRAR SECCIÓN
========================================= */

function mostrarSeccion(id) {

    const seccion =
        document.getElementById(id);

    if (!seccion) return;

    seccion.classList.remove("oculto");

    seccion.style.animation =
        "aparecer .8s ease";
}


/* =========================================
   ABRIR CARTA
========================================= */

function abrirCarta() {

    const carta =
        document.getElementById("contenido-carta");


    carta.classList.remove("oculto");


    carta.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================
   FOTOS DE CADA MOMENTO
========================================= */

const recuerdos = {

    mayo: {

        titulo:
            "Recuerdos del comienzo 💙",

        fotos: [
            1, 2, 3, 4, 5,
            6, 7, 8, 9, 10
        ]

    },


    junio: {

        titulo:
            "Recuerdos de nuestro primer mes 🌙",

        fotos: [
            11, 12, 13, 14,
            15, 16, 17, 18, 19
        ]

    },


    julio: {

        titulo:
            "Recuerdos de nuestro segundo mes ⭐",

        fotos: [
            20, 21, 22, 23,
            24, 25, 26, 27, 28
        ]

    },


    agosto: {

        titulo:
            "Recuerdos de nuestro tercer mes ✨",

        fotos: [
            29, 30, 31, 32,
            33, 34, 35, 36, 37
        ]

    },


    septiembre: {

        titulo:
            "Recuerdos de nuestro cuarto mes 🌙",

        fotos: [
            38, 39, 40, 41,
            42, 43, 44, 45, 46
        ]

    },


    octubre: {

        titulo:
            "Recuerdos de nuestro quinto mes 💙",

        fotos: [
            47, 48, 49
        ]

    }

};


/* =========================================
   MOSTRAR RECUERDOS
========================================= */

function mostrarRecuerdos(momento) {

    const datos =
        recuerdos[momento];

    if (!datos) return;


    const contenedor =
        document.getElementById(
            "recuerdos-momento"
        );

    const galeria =
        document.getElementById(
            "galeria-momento"
        );

    const titulo =
        document.getElementById(
            "titulo-recuerdo"
        );


    /*
    Cambiamos el título según
    el cuadrito presionado.
    */

    titulo.textContent =
        datos.titulo;


    /*
    Limpiamos la galería anterior.
    */

    galeria.innerHTML = "";


    /*
    Creamos las fotografías.
    */

    datos.fotos.forEach(
        (numero, index) => {

            const tarjeta =
                document.createElement("div");

            tarjeta.className =
                "foto-momento";


            tarjeta.style.animationDelay =
                `${index * 0.07}s`;


            const imagen =
                document.createElement("img");
                

            imagen.src =
                `img/recuerdo${numero}.jpeg`;


            imagen.alt =
                `Recuerdo ${numero}`;


            tarjeta.appendChild(imagen);

            galeria.appendChild(tarjeta);

        }
    );


    /*
    Mostramos el contenedor.
    */

    contenedor.classList.remove("oculto");


    contenedor.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================
   CERRAR RECUERDOS
========================================= */

function cerrarRecuerdos() {

    const contenedor =
        document.getElementById(
            "recuerdos-momento"
        );


    contenedor.classList.add("oculto");

}


/* =========================================
   WHATSAPP
========================================= */

function enviarWhatsApp() {

    const mensaje =
        document
            .getElementById("mensajeWhatsapp")
            .value
            .trim();


    if (mensaje === "") {

        alert(
            "Escribe algo bonito antes de enviarlo 💙"
        );

        return;
    }


    /*
    CAMBIA ESTE NÚMERO POR EL NÚMERO
    DE WHATSAPP QUE CORRESPONDA.

    México = 52
    */

    const numero =
        "525649413824";


    const texto =
        "Hola 💙✨ Te escribo desde la página:\n\n"
        + mensaje;


    const url =
        "https://wa.me/"
        + numero
        + "?text="
        + encodeURIComponent(texto);


    window.open(
        url,
        "_blank"
    );

}
// ========================================
// ACCESO A LA PÁGINA
// ========================================

function normalizarRespuesta(texto) {
    return texto
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function verificarAcceso() {

    const nombre = normalizarRespuesta(
        document.getElementById("nombre").value
    );

    const lugar = normalizarRespuesta(
        document.getElementById("lugar").value
    );

    const fecha = normalizarRespuesta(
        document.getElementById("fecha").value
    );

    const color = normalizarRespuesta(
        document.getElementById("color").value
    );

    const mensaje = document.getElementById("mensaje-acceso");

    const respuestasCorrectas =
        nombre === "melinda vazquez reyes" &&
        lugar === "en el cecytem" &&
        fecha === "5" &&
        color === "azul";

    if (respuestasCorrectas) {

        mensaje.textContent = "¡Todo correcto! Bienvenida a nuestra historia ❤️";

        mensaje.style.color = "#b8ffcc";

        setTimeout(() => {

            const pantalla = document.getElementById("pantalla-acceso");

            pantalla.style.opacity = "0";

            pantalla.style.transition = "opacity 0.8s ease";

            setTimeout(() => {
                pantalla.style.display = "none";
            }, 800);

        }, 700);

    } else {

        mensaje.textContent =
            "Mmm... alguna respuesta no es correcta. Inténtalo otra vez ❤️";

        mensaje.style.color = "#ffb8b8";
    }
}