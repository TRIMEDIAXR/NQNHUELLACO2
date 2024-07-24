const pantalla = document.getElementById("pantalla").style.display = "none";
//SALUDA SOLO UNA VEZ CON EL AUDIO ASÍ NO SE VUELVE REPETITIVO 
let contadorSaludo = 0;


//TEXTOS ANIMADOS
var bienvenida = new Typed('#txtAnimado', {
    strings: [
        '<i class="fs-4">¡Hola!Te damos la bienvenida a nuestra calculadora de huella de carbono.</i>',
        '<i class="fs-4">Soy Huellita</i>',
        '<i class="fs-4">¿Cuál es tu nombre?</i>'],

    typeSpeed: 20,
    backSpeed: 50,
    shuffle: false,
    backDelay: 1000,
    loop: false,
    showCursor: false,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 50,

})

var edad;
let zona;
let personas;
let sumiluz;

var placeNombre = new Typed('#usuarioNombre', {
    strings: ['Tu nombre aquí', 'Escribe aquí', 'para continuar'],
    startDelay: 700,
    typeSpeed: 40,
    backSpeed: 40,
    attr: 'placeholder',
    bindInputFocusEvents: true,
    showCursor: true,
    loop: true
});

//CREACION DE USUARIO CON LAS VARIABLES E INFORMACION A GUARDAR
class Usuario {
    constructor(nombre, edad, mail, zona, consumoTotal, categoria, fecha, primerTiempo, segundoTiempo, cantPersonas, tipoElectrico, cantConsumoElectrico, tipoGas, cantConsumoGas, cantResiduos, colectivo, moto, auto, bici, tren, caminar, monopatin, frecuenciaAuto, frecuenciaAvion, frecuenciaColectivo, dieta, consumoCarne, recicla, compost, plantas, dispositivos, salidas) {
        this.nombre = nombre;
        this.edad = edad;
        this.mail = mail;
        this.zona = zona;
        this.consumoTotal = consumoTotal;
        this.categoria = categoria;
        this.fecha = fecha;
        //tiempo que se tarda en contestar desde el boton comenzar hasta el boton calcular resultado
        this.primerTiempo = primerTiempo;
        //tiempo que se tarda en contestar desde el boton conseguir medalla hasta el boton calcular y obtener medalla
        this.segundoTiempo = segundoTiempo;

        this.cantPersonas = cantPersonas;
        this.tipoElectrico = tipoElectrico;
        this.cantConsumoElectrico = cantConsumoElectrico;
        this.tipoGas = tipoGas;
        this.cantConsumoGas = cantConsumoGas;
        this.cantResiduos = cantResiduos;
        this.colectivo = colectivo;
        this.moto = moto;
        this.auto = auto;
        this.bici = bici;
        this.tren = tren;
        this.caminar = caminar;
        this.monopatin = monopatin;
        this.frecuenciaAuto = frecuenciaAuto;
        this.frecuenciaAvion = frecuenciaAvion;
        this.frecuenciaColectivo = frecuenciaColectivo;
        this.dieta = dieta;
        this.consumoCarne = consumoCarne;
        this.recicla = recicla;
        this.compost = compost;
        this.plantas = plantas;
        this.dispositivos = dispositivos;
        this.salidas = salidas;

    }
}

//LISTENERS PARA VERIFICAR LA CARGA DE DATOS
const avanceBtn = document.getElementById('avance');

//window.addEventListener("keydown", function (e) { if (13 == e.keyCode) { avanzar() } });

const idName = document.getElementById('usuarioNombre');
idName.addEventListener('input', () => {
    const texto = idName.value.trim();
    avanceBtn.disabled = texto === '';
});

const idEdad = document.getElementById('usuarioEdad');
idEdad.addEventListener('input', () => {
    const texto = idEdad.value.trim();
    avanceBtn.disabled = texto === '';
});



//DEFINE EL ORDEN DE LAS PANTALLAS Y EL AVANCE Y RETROCESO
let pantallaActiva = 0;

//SE EJECUTA PARA CARGA LA PAGINA PRINCIPAL
comenzar();
//SE CREA EL NUEVO USUARIO
const usuario = new Usuario;
console.log(usuario);


//COMIENZA LA APLICACION
function comenzar() {
    const login = document.getElementById("btnlogin").style.display = "flex";
    const qa = document.getElementById("qa").style.display = "none";
    const auspiciantes = document.getElementById("provincia").style.display = "flex";
    const botonesNav = document.getElementById("botonesNav").style.display = "none";
    const fondo = document.getElementById("fondo").style.backgroundImage = "url(images/fondo.jpeg)";
    const main = document.getElementById("main").style.display = "block";
    const masInfo = document.getElementById("btnInfo").style.display = "none";
    pantallaActiva = 0;
    bienvenida.reset();
    bienvenida.start();
}





////////////////////////COMIENZA LA CAPTURA DE DATOS PERSONALES///////////////////

function mostrarQA() {
    const avanceBtn = document.getElementById('avance');
    if (usuario.nombre!=undefined ) {
        avanceBtn.disabled=false;
    }
    contadorSaludo += 1;
    const main = document.getElementById("main").style.display = "none";
    const qa = document.getElementById("qa").style.display = "flex";
    const auspiciantes = document.getElementById("provincia").style.display = "none";
    const botonesNav = document.getElementById("botonesNav").style.display = "flex";
    const fondo = document.getElementById("fondo").style.backgroundImage = "url(images/perfil.jpg)";
    const login = document.getElementById("btnlogin").style.display = "none";
    const masInfo = document.getElementById("btnInfo").style.display = "flex";
    pantallaActiva = 1;
    if (contadorSaludo == 1) {
        const saludar = document.getElementById("saludo").play();
        bienvenida.start();
        bienvenida.reset();
    }
    const nombre = document.getElementById("inputNombre").style.display = "flex";
    const edad = document.getElementById("inputEdad").style.display = "none";
    const zona = document.getElementById("inputZona").style.display = "none";
    const sumiLuz = document.getElementById("inputSumiLuz").style.display = "none";
    const cantidadPer = document.getElementById("inputPersonas").style.display = "none";
    const consumoLuz = document.getElementById("inputConsumo").style.display = "none";

}


function mostrarEdad() {
    if (idEdad.value.trim() === '') {
        const avanceBtn = document.getElementById('avance').disabled = true;
    }

    bienvenida.destroy();
    const nombreValue = document.getElementById("usuarioNombre").value;
    edad = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">Hola ' + nombreValue + '!</i>',
            '<i class="fs-4">Para calcular tu huella personal necesitamos algunos datos importantes</i>',
            '<i class="fs-4">Vamos a comenzar</i>',
            '<i class="fs-4">¿Qué edad tenés?</i>'],

        typeSpeed: 20,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 50,

    })


    const nombre = document.getElementById("inputNombre").style.display = "none";
    const anios = document.getElementById("inputEdad").style.display = "flex";
    const zona = document.getElementById("inputZona").style.display = "none";
    const sumiLuz = document.getElementById("inputSumiLuz").style.display = "none";
    const consumoLuz = document.getElementById("inputConsumo").style.display = "none";
    const cantidadPer = document.getElementById("inputPersonas").style.display = "none";
}

function mostrarZona() {
    const avanceBtn = document.getElementById('avance');
    if (usuario.zona==undefined) {
        console.log("entró")
        avanceBtn.disabled = true;
    }
    edad.destroy();
    zona = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿En qué región de la provincia de Neuquén vivís?</i>^2000',
            '<i class="fs-4">Si necesitas ayuda, puedes consultar en el botón +info</i>'],

        typeSpeed: 20,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 50,

    })
    zona.start();
    const nombre = document.getElementById("inputNombre").style.display = "none";
    const anios = document.getElementById("inputEdad").style.display = "none";
    const area = document.getElementById("inputZona").style.display = "flex";
    const cantidadPer = document.getElementById("inputPersonas").style.display = "none";
    const sumiLuz = document.getElementById("inputSumiLuz").style.display = "none";
    const consumoLuz = document.getElementById("inputConsumo").style.display = "none";

}

function idZona(boton) {
    avanceBtn.disabled = false;
    
    switch (boton.id) {
        case "0":
            //GUARDO LA ZONA AL TOCAR LA OPCION
            usuario.zona = "Vaca Muerta";
            console.log(usuario);
            break;
        case "1":
            //GUARDO LA ZONA AL TOCAR LA OPCION
            usuario.zona = "Centro Oeste";
            console.log(usuario);
            break;
        case "2":
            //GUARDO LA ZONA AL TOCAR LA OPCION
            usuario.zona = "Comarca";
            console.log(usuario);
            break;
        case "3":
            //GUARDO LA ZONA AL TOCAR LA OPCION
            usuario.zona = "Norte";
            console.log(usuario);
            break;
        case "4":
            //GUARDO LA ZONA AL TOCAR LA OPCION
            usuario.zona = "Confluencia";
            console.log(usuario);
            break;
        case "5":
            //GUARDO LA ZONA AL TOCAR LA OPCION
            usuario.zona = "Limay Centro";
            console.log(usuario);
            break;
        case "6":
            //GUARDO LA ZONA AL TOCAR LA OPCION
            usuario.zona = "Region Sur";
            console.log(usuario);
            break;
        default:
            break;
    }
}


function mostrarPersonas() {
    zona.destroy();
    personas = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Cuántas personas viven en tu domicilio?</i>'],

        typeSpeed: 20,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 50,

    })
    const nombre = document.getElementById("inputNombre").style.display = "none";
    const anios = document.getElementById("inputEdad").style.display = "none";
    const area = document.getElementById("inputZona").style.display = "none";
    const cantidadPer = document.getElementById("inputPersonas").style.display = "flex";
    const sumiLuz = document.getElementById("inputSumiLuz").style.display = "none";
    const consumoLuz = document.getElementById("inputConsumo").style.display = "none";
    const fondo = document.getElementById("fondo").style.backgroundImage = "url(images/perfil.jpg)";
}

function mostrarSumiLuz() {
    personas.destroy();
    sumiluz = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Qué tipo de suministro eléctrico utilizas?</i>'],

        typeSpeed: 20,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 50,

    })
    const nombre = document.getElementById("inputNombre").style.display = "none";
    const anios = document.getElementById("inputEdad").style.display = "none";
    const area = document.getElementById("inputZona").style.display = "none";
    const cantidadPer = document.getElementById("inputPersonas").style.display = "none";
    const sumiLuz = document.getElementById("inputSumiLuz").style.display = "flex";
    const consumoLuz = document.getElementById("inputConsumo").style.display = "none";
    const fondo = document.getElementById("fondo").style.backgroundImage = "url(images/energia.jpg)";
}


function mostrarConsumo() {
    sumiluz.destroy();
    consumo = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Cuál es tu consumo eléctrico mensual?</i>'],

        typeSpeed: 20,
        backSpeed: 50,
        shuffle: false,
        backDelay: 1000,
        loop: false,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 50,

    })
    const nombre = document.getElementById("inputNombre").style.display = "none";
    const anios = document.getElementById("inputEdad").style.display = "none";
    const area = document.getElementById("inputZona").style.display = "none";
    const cantidadPer = document.getElementById("inputPersonas").style.display = "none";
    const sumiLuz = document.getElementById("inputSumiLuz").style.display = "none";
    const consumoLuz = document.getElementById("inputConsumo").style.display = "flex";
    const fondo = document.getElementById("fondo").style.backgroundImage = "url(images/energia.jpg)";
}



function compartirResultado() {

}

function mostrarPantalla() {
    if (pantallaActiva == 0) {
        const pantalla = document.getElementById("pantalla").style.display = "flex";
        const login = document.getElementById("loginCard").style.display = "flex";
        const info = document.getElementById("infoCard").style.display = "none";
    }
    if (pantallaActiva > 0) {
        const pantalla2 = document.getElementById("pantalla").style.display = "flex";
        const login2 = document.getElementById("loginCard").style.display = "none";
        const info2 = document.getElementById("infoCard").style.display = "flex";
        const data = document.getElementById("data").innerHTML = "Bienvenido a nuestra aplicación de cálculo de huella de carbono. Esta herramienta está diseñada para ayudarte a entender cómo tus actividades diarias impactan en el medio ambiente, específicamente en términos de emisiones de gases de efecto invernadero. Al responder las siguientes preguntas, podrás identificar áreas clave donde podrías hacer cambios significativos para reducir tu huella de carbono y contribuir a la protección del planeta. Cada sección abordará diferentes aspectos de tu vida, desde el transporte hasta tus hábitos en el hogar y estilo de vida. ¡Empecemos!";
    }

}

//TECLAS DE CONTROL AVANCE Y RETROCESO

function avanzar() {
    //AUMENTA LA POSICION DE PANTALLAS
    pantallaActiva += 1;
    switch (pantallaActiva) {
        case 0:
            comenzar();
            break;
        case 1:
            mostrarQA();
            break;
        case 2:
            //GUARDO EL NOMBRE INGRESADO AL TOCAR AVANZAR
            const idname = document.getElementById("usuarioNombre").value;
            usuario.nombre = idname;
            console.log(usuario);
            mostrarEdad();
            break;
        case 3:
            //GUARDO LA EDAD AL TOCAR AVANZAR
            const idEdad = document.getElementById("usuarioEdad").value;
            usuario.edad = idEdad;
            console.log(usuario);
            mostrarZona();
            break;
        case 4:
            mostrarPersonas();
            break;
        case 5:
            mostrarSumiLuz();
            break;
        case 6:
            mostrarConsumo();
            break;
        default:
            comenzar();
            break;
    }






}

function mostrarData(boton) {
    const pantalla = document.getElementById("pantalla").style.display = "flex";
    const login = document.getElementById("loginCard").style.display = "none";
    const info = document.getElementById("infoCard").style.display = "flex";
    switch (boton.id) {
        case "btnPerfil":
            console.log("mostrar data perfil");
            const dataPerfil = document.getElementById("data").innerHTML = "Estos datos son importantes para oferecer la mejor experiencia durante el cálculo de tu huella de carbono.";
            break;
        case "btnHogar":
            console.log("mostrar data hogar");
            const dataHogar = document.getElementById("data").innerHTML = "Tu hogar puede ser una fuente significativa de emisiones de carbono, dependiendo de cómo consumes energía y recursos. Esta sección explora tu uso de energía y manejo de residuos en casa.";
            break;
        case "btnTransporte":
            console.log("mostrar data transporte");
            const dataTransporte = document.getElementById("data").innerHTML = "El transporte es uno de los principales contribuyentes a las emisiones globales de carbono. Esta sección te pregunta sobre tus hábitos de transporte para evaluar el impacto de tus desplazamientos diarios y viajes frecuentes.";
            break;
        case "btnVida":
            console.log("mostrar data vida");
            const dataVida = document.getElementById("data").innerHTML = "Los hábitos diarios y decisiones de consumo personal pueden sumar significativamente a tu huella de carbono. Esta sección te ayudará a reflexionar sobre tus patrones de consumo y prácticas diarias.";
            break;
        case "btnExtra":
            console.log("mostrar data extra");
            const dataExtra = document.getElementById("data").innerHTML = "Las preguntas extra nos ayudan a mejorar la presición del cálculo personal y podemos ofrecer consejos para disminuir tu impacto ambiental";
            break;

        default:
            break;
    }
}

function retroceder() {
    //REDUCE LA POSICION DE PANTALLAS
    pantallaActiva -= 1;
    switch (pantallaActiva) {
        case 0:
            comenzar();
            break;
        case 1:
            mostrarQA();
            break;
        case 2:
            mostrarEdad();
            break;
        case 3:
            mostrarZona();
            break;
        case 4:
            mostrarPersonas();
            break;
        case 5:
            mostrarSumiLuz();
            break;
        case 6:
            mostrarConsumo();
            break;
        case 7:
            mostrarSumiGas();
            break;
        case 8:
            mostrarConsumoGas();
            break;
        case 9:
            mostrarTransporte();
            break;
        case 10:
            mostrarLargaDis();
            break;
        case 11:
            mostrarDieta();
            break;
        case 12:
            mostrarGracias();
            break;
        case 13:
            mostrarResultado();
            break;
        case 14:
            mostrarMasPreguntas();
            break;
        default:
            comenzar();
            break;
    }
}

// SALIR DE PANTALLA FLOTANTE CON INFO
window.onload = function () {

    document.onclick = function (e) {
        if (e.target.id == "pantalla" || e.target.id == "tarjeta" || e.target.id == "caja" || e.target.id == "caja2") {
            //element clicked wasn't the div; hide the div
            const divToHide = document.getElementById("pantalla").style.display = "none";
        }
    };
};

// ANIMACION HUELLITA
const images = ["images/imagen1.png", "images/imagen2.png", "images/imagen3.png"]; // Ruta de las imágenes
const imageContainer = document.getElementById("image-container");
let currentIndex = 0;

function changeImage() {
    imageContainer.innerHTML = `<img src="${images[currentIndex]}" alt="Imagen ${currentIndex + 1}">`;
    currentIndex = (currentIndex + 1) % images.length; // Avanza al siguiente índice (ciclo)
}

// Cambia la imagen cada 0.5 segundos
setInterval(changeImage, 600);

function updateProgressBar(progressValue) {
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = progressValue + '%';
}

function simulateProgress() {
    let progress = 0;
    const interval = setInterval(() => {
        if (progress >= 40) {
            clearInterval(interval);
        } else {
            progress++;
            updateProgressBar(progress);
        }
    }, 100); // Cambia este valor para ajustar la velocidad de llenado
}

// Llama a la función para simular el progreso
simulateProgress();