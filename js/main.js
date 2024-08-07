const pantalla = document.getElementById("pantalla").style.display = "none";
//SALUDA SOLO UNA VEZ CON EL AUDIO ASÍ NO SE VUELVE REPETITIVO 
let contadorSaludo = 0;
let contadorPreguntas = 0;

//TEXTOS ANIMADOS
var bienvenida;
var edad;
let zona;

var tipoVehiculo;
var cantKilo;
var transporteP;
var vuelosP;
var biciP;
var carpoolingP;
var efienergy;

var tipoEnergy;
var viviendaP;
var personasP;
var electrosP;
var reciclasP;
var dispositivosP;
var renovablesP;

var aguaConsumo;
var product;

var felicidades;

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
    constructor(nombre, edad, zona, tipoVehiculo, cantKilometros, transporteP, vuelos, bicicamina, compVehiculo, eficiencia, electrica, gasNatural, gasEnvasado, renovable, sizeVivienda, cantPersonas, electros, recicla, dispositivos, renovables, agua, locales, fecha, mail, resultado, categoria) {
        //preguntas de perfil
        this.nombre = nombre;
        this.edad = edad;
        this.zona = zona;
        //preguntas de transporte
        this.tipoVehiculo = tipoVehiculo;
        this.cantKilometros = cantKilometros;
        this.transporteP = transporteP;
        this.vuelos = vuelos;
        this.bicicamina = bicicamina;
        this.compVehiculo = compVehiculo;
        this.eficiencia = eficiencia;
        //preguntas de hogar
        this.electrica = electrica;
        this.gasNatural = gasNatural;
        this.gasEnvasado = gasEnvasado;
        this.renovable = renovable;
        this.sizeVivienda = sizeVivienda;
        this.cantPersonas = cantPersonas;
        this.electros = electros;
        this.recicla = recicla;
        this.dispositivos = dispositivos;
        this.renovables = renovables;
        //preguntas de estilo de vida
        this.agua = agua;
        this.locales = locales;
        //preguntas de estilo de vida
        this.fecha = fecha;
        this.mail = mail;
        this.resultado = resultado;
        this.categoria = categoria
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
    const auspiciantes = document.getElementById("provincia").style.display = "flex";
    const botonesNav = document.getElementById("botonesNav").style.display = "none";
    const fondo = document.getElementById("fondo").style.backgroundImage = "url(images/fondo.jpeg)";
    const main = document.getElementById("main").style.display = "block";
    const masInfo = document.getElementById("btnInfo").style.display = "none";
    pantallaActiva = 0;

    const listaPreguntas = document.getElementById("listaPreguntas").style.display = "none";
    const idPerfil = document.getElementById("divPerfil").style.display = "none";
    const idTransporte = document.getElementById("divTransporte").style.display = "none";
    const idHogar = document.getElementById("divHogar").style.display = "none";
    const idVida = document.getElementById("divVida").style.display = "none";
    const idFinal = document.getElementById("divFinal").style.display = "none";
}

////////////////////////COMIENZA LA CAPTURA DE DATOS PERSONALES///////////////////

function mostrarPreguntas() {
    contadorPreguntas = 1;
    if (edad != null) {
        edad.destroy();
    }
    bienvenida = new Typed('#txtAnimado', {
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
    bienvenida.start();

    const preguntas = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    if (usuario.nombre != undefined) {
        avanceBtn.disabled = false;
    }
    contadorSaludo += 1;
    const main = document.getElementById("main").style.display = "none";
    const listaPreguntas = document.getElementById("listaPreguntas").style.display = "flex";
    const auspiciantes = document.getElementById("provincia").style.display = "none";
    const botonesNav = document.getElementById("botonesNav").style.display = "flex";
    const fondo = document.getElementById("fondo").style.backgroundImage = "url(images/perfil.jpg)";
    const login = document.getElementById("btnlogin").style.display = "none";
    const masInfo = document.getElementById("btnInfo").style.display = "flex";
    pantallaActiva = 1;
    if (contadorSaludo == 1) {
        const saludar = document.getElementById("saludo").play();

    }


    const idPerfil = document.getElementById("divPerfil").style.display = "flex";
    const nombre = document.getElementById("inputNombre").style.display = "flex";
    const edadf = document.getElementById("inputEdad").style.display = "none";
    const zona = document.getElementById("inputZona").style.display = "none";
}


function mostrarEdad() {
    const preguntas = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    if (idEdad.value.trim() === '') {
        const avanceBtn = document.getElementById('avance').disabled = true;
    }

    bienvenida.destroy();
    if (zona != null) {
        zona.destroy();
    }
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
    edad.start();
    const nombre = document.getElementById("inputNombre").style.display = "none";
    const anios = document.getElementById("inputEdad").style.display = "flex";
    const zonaf = document.getElementById("inputZona").style.display = "none";
}

function mostrarZona() {
    const preguntas = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    const avanceBtn = document.getElementById('avance');
    if (usuario.zona == undefined) {
        console.log("entró")
        avanceBtn.disabled = true;
    }
    edad.destroy();
    if (tipoVehiculo != null) {
        tipoVehiculo.destroy();
    }
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

    const idPerfil = document.getElementById("divPerfil").style.display = "flex";
    const idTransporte = document.getElementById("divTransporte").style.display = "none";
    const nombre = document.getElementById("inputNombre").style.display = "none";
    const anios = document.getElementById("inputEdad").style.display = "none";
    const area = document.getElementById("inputZona").style.display = "flex";

}

function idZona(boton) {
    avanceBtn.disabled = false;
    usuario.zona = boton.value;
    console.log(usuario);
}

function mostrarVehiculo() {
    zona.destroy();
    if (cantKilo != null) {
        cantKilo.destroy();
    }
    const preguntas = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    if (usuario.tipoVehiculo == undefined) {
        console.log("entró")
        avanceBtn.disabled = true;
    }

    tipovehiculo = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Qué tipo de vehículo utilizas principalmente?</i>'],

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
    tipovehiculo.start();

    const idPerfil = document.getElementById("divPerfil").style.display = "none";
    const idTransporte = document.getElementById("divTransporte").style.display = "flex";
    const vehiculo = document.getElementById("inputVehiculo").style.display = "flex";
    const cantKilometros = document.getElementById("cantKilometros").style.display = "none";
    const tPublico = document.getElementById("tPublico").style.display = "none";
}

function idVehiculo(boton) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const vehiculoElegido = boton.innerHTML;
    usuario.tipoVehiculo = vehiculoElegido;
    console.log(usuario);
}

function mostrarKilometros() {
    tipovehiculo.destroy();
    if (transporteP != null) {
        transporteP.destroy();
    }
    const preguntas = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    if (usuario.cantKilometros == undefined) {
        console.log("entró")
        avanceBtn.disabled = true;
    }
    cantKilo = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Cuántos kilómetros conduces en promedio cada semana?</i>'],

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
    cantKilo.start();
    const vehiculo = document.getElementById("inputVehiculo").style.display = "none";
    const cantKilometros = document.getElementById("cantKilometros").style.display = "flex";
    const tPublico = document.getElementById("tPublico").style.display = "none";
}

function idKilometros(boton) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const kilometros = boton.innerHTML;
    usuario.cantKilometros = kilometros;
    console.log(usuario);
}

function mostrarTransporte() {
    if (usuario.tipoVehiculo == "No uso vehículo") {
        tipovehiculo.destroy();
    }
    else {
        if (cantKilo != null) {
            cantKilo.destroy();
        }

    }
    if (vuelosP != null) {
        vuelosP.destroy();
    }
    const preguntas = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    if (usuario.transporteP == undefined) {
        console.log("entró")
        avanceBtn.disabled = true;
    }
    transporteP = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Utilizas transporte público regularmente? ¿Cuántos días a la semana?</i>'],

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
    transporteP.start();
    const vehiculo = document.getElementById("inputVehiculo").style.display = "none";
    const cantKilometros = document.getElementById("cantKilometros").style.display = "none";
    const tPublico = document.getElementById("tPublico").style.display = "flex";
    const vuelos = document.getElementById("vuelos").style.display = "none";
}

function idTransporte(boton) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const tPublico = boton.innerHTML;
    usuario.transporteP = tPublico;
    console.log(usuario);
}

function mostrarVuelos() {
    transporteP.destroy();
    if (biciP != null) {
        biciP.destroy();
    }
    const preguntas = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    if (usuario.vuelos == undefined) {
        console.log("entró")
        avanceBtn.disabled = true;
    }
    vuelosP = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Cuántos vuelos nacionales e internacionales tomas en un año?</i>'],

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
    vuelosP.start();


    const tPublico = document.getElementById("tPublico").style.display = "none";
    const vuelos = document.getElementById("vuelos").style.display = "flex";
    const bicicamina = document.getElementById("bicicamina").style.display = "none";
}

function idVuelos(boton) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const cantvuelos = boton.innerHTML;
    usuario.vuelos = cantvuelos;
    console.log(usuario);
}


function mostrarBiciCamina() {
    vuelosP.destroy();
    if (carpoolingP != null) {
        carpoolingP.destroy();
    }
    const preguntas = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    if (usuario.bicicamina == undefined) {
        console.log("entró")
        avanceBtn.disabled = true;
    }
    biciP = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Realizas viajes en bicicleta o caminatas como parte de tu rutina diaria?</i>'],

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
    biciP.start();

    const vuelos = document.getElementById("vuelos").style.display = "none";
    const bicicamina = document.getElementById("bicicamina").style.display = "flex";
    const carpooling = document.getElementById("carpooling").style.display = "none";
}

function idBiciCamina(boton) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const bici = boton.innerHTML;
    usuario.bicicamina = bici;
    console.log(usuario);
}

function mostrarCarpooling() {
    biciP.destroy();
    if (efienergy != null) {
        efienergy.destroy();
    }
    const preguntas = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    if (usuario.compVehiculo == undefined) {
        console.log("entró")
        avanceBtn.disabled = true;
    }
    carpoolingP = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Participas en algún sistema de carpooling o compartes el vehículo con otras personas semanalmente?</i>'],

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
    carpoolingP.start();

    const bicicamina = document.getElementById("bicicamina").style.display = "none";
    const carpooling = document.getElementById("carpooling").style.display = "flex";
    const efiEnergía = document.getElementById("efiEnergia").style.display = "none";
}

function idCarpooling(boton) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const carpooling = boton.innerHTML;
    usuario.compVehiculo = carpooling;
    console.log(usuario);
}

function mostrarEficiencia() {
    carpoolingP.destroy();
    if (tipoEnergy != null) {
        tipoEnergy.destroy();
    }
    const preguntas = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    if (usuario.eficiencia == undefined) {
        console.log("entró")
        avanceBtn.disabled = true;
    }
    efienergy = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Cuál es la eficiencia de combustible de tu vehículo principal?</i>'],

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
    efienergy.start();

    const divHogar = document.getElementById("divHogar").style.display = "none";
    const carpooling = document.getElementById("carpooling").style.display = "none";
    const efiEnergía = document.getElementById("efiEnergia").style.display = "flex";
    const energia = document.getElementById("bicicamina").style.display = "none";
}
function idEficiencia(boton) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const efi = boton.innerHTML;
    usuario.eficiencia = efi;
    console.log(usuario);
}

function mostrarEnergia() {
    if (usuario.tipoVehiculo == "No uso vehículo") {
        carpoolingP.destroy();
    }
    else {
        efienergy.destroy();
    }
    const preguntas = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    if (viviendaP != null) {
        viviendaP.destroy();
    }
    if (usuario.renovable == undefined && usuario.gasEnvasado == undefined && usuario.gasNatural == undefined && usuario.electrica == undefined) {
        console.log("entró toda")
        avanceBtn.disabled = true;
    }
    tipoEnergy = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Qué tipo de energías utilizas en tu hogar?</i>'],

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
    tipoEnergy.start();

    const divHogar = document.getElementById("divHogar").style.display = "flex";
    const carpooling = document.getElementById("carpooling").style.display = "none";
    const efiEnergía = document.getElementById("efiEnergia").style.display = "none";
    const energia = document.getElementById("energia").style.display = "flex";
    const vivienda = document.getElementById("sizeVivienda").style.display = "none";
}

function guardarEnergia(boton) {
    switch (boton.id) {
        case "electrica":
            usuario.electrica = boton.checked;
            break;
        case "gasNatural":
            usuario.gasNatural = boton.checked;
            break;
        case "gasEnvasado":
            usuario.gasEnvasado = boton.checked;
            break;
        case "renovables":
            usuario.renovable = boton.checked;
            break;
        default:
            break;
    }
    const renovable = document.getElementById("renovables");
    const gasNatural = document.getElementById("gasNatural");
    const gasEnvasado = document.getElementById("gasEnvasado");
    const electrica = document.getElementById("electrica");
    if (renovable.checked == true || gasNatural.checked == true || gasEnvasado.checked == true || electrica.checked == true) {
        avanceBtn.disabled = false;
    }
    else {
        avanceBtn.disabled = true;
    }

    console.log(usuario);
}

function mostrarVivienda() {
    tipoEnergy.destroy();
    if (personasP != null) {
        personasP.destroy();
    }
    const preguntas = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    if (usuario.compVehiculo == undefined) {
        console.log("entró")
        avanceBtn.disabled = true;
    }
    viviendaP = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Cuál es el tamaño de tu vivienda en metros cuadrados?</i>'],

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
    viviendaP.start();

    const energia = document.getElementById("energia").style.display = "none";
    const vivienda = document.getElementById("sizeVivienda").style.display = "flex";
    const personas = document.getElementById("cantPersonas").style.display = "none";
}

function idtamanio(boton) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const vivienda = boton.innerHTML;
    usuario.sizeVivienda = vivienda;
    console.log(usuario);
}


function mostrarPersonas() {
    viviendaP.destroy();
    if (electrosP != null) {
        electrosP.destroy();
    }
    const preguntas = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    if (usuario.cantPersonas == undefined) {
        console.log("entró")
        avanceBtn.disabled = true;
    }
    personasP = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Cuántas personas viven en tu hogar?</i>'],
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
    personasP.start();
    const vivienda = document.getElementById("sizeVivienda").style.display = "none";
    const personas = document.getElementById("cantPersonas").style.display = "flex";
    const electros = document.getElementById("electrosConsumo").style.display = "none";
}

function idPersonas(boton) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const personas = boton.innerHTML;
    usuario.cantPersonas = personas;
    console.log(usuario);
}

function mostrarElectros() {
    personasP.destroy();
    if (reciclasP != null) {
        reciclasP.destroy();
    }
    const preguntas = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    if (usuario.electros == undefined) {
        console.log("entró")
        avanceBtn.disabled = true;
    }
    electrosP = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Qué electrodomésticos utilizas y con qué frecuencia?</i>'],
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
    electrosP.start();
    const personas = document.getElementById("cantPersonas").style.display = "none";
    const electros = document.getElementById("electrosConsumo").style.display = "flex";
    const reci = document.getElementById("reciclaje").style.display = "none";
}

function idElectros(boton) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const electros = boton.innerHTML;
    usuario.electros = electros;
    console.log(usuario);
}

function mostrarReciclar() {
    electrosP.destroy();
    if (dispositivosP != null) {
        dispositivosP.destroy();
    }
    const preguntas = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    if (usuario.recicla == undefined) {
        console.log("entró")
        avanceBtn.disabled = true;
    }
    reciclasP = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Reciclas regularmente?</i>'],
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
    reciclasP.start();
    const electros = document.getElementById("electrosConsumo").style.display = "none";
    const reci = document.getElementById("reciclaje").style.display = "flex";
    const dispo = document.getElementById("conDispositivos").style.display = "none";
}

function idReciclaje(boton) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const reci = boton.innerHTML;
    usuario.recicla = reci;
    console.log(usuario);
}

function mostrarDispositivos() {
    reciclasP.destroy();
    if (renovablesP != null) {
        renovablesP.destroy();
    }
    const preguntas = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    if (usuario.dispositivos == undefined) {
        console.log("entró")
        avanceBtn.disabled = true;
    }
    dispositivosP = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Cuántos dispositivos electrónicos dejas enchufados permanentemente en tu hogar?</i>'],
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
    dispositivosP.start();

    const reci = document.getElementById("reciclaje").style.display = "none";
    const dispo = document.getElementById("conDispositivos").style.display = "flex";
    const renova = document.getElementById("tipoRenovables").style.display = "none";
}

function idDisposi(boton) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const dispo = boton.innerHTML;
    usuario.dispositivos = dispo;
    console.log(usuario);
}

function mostrarRenovable() {
    dispositivosP.destroy();
    if (aguaConsumo != null) {
        aguaConsumo.destroy();
    }
    const preguntas = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    if (usuario.renovables == undefined) {
        console.log("entró")
        avanceBtn.disabled = true;
    }
    renovablesP = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Tienes energía renovable con paneles solares o turbinas eólicas?</i>'],
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
    renovablesP.start();
    const hogar = document.getElementById("divHogar").style.display = "flex";
    const dispo = document.getElementById("conDispositivos").style.display = "none";
    const renova = document.getElementById("tipoRenovables").style.display = "flex";
    const agua = document.getElementById("aguaConsumo").style.display = "none";
    const vida = document.getElementById("divVida").style.display = "none";
}

function idRenovable(boton) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const reno = boton.innerHTML;
    usuario.renovables = reno;
    console.log(usuario);
}

function mostrarAgua() {
    renovablesP.destroy();
    if (product != null) {
        product.destroy();
    }
    const preguntas = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    if (usuario.agua == undefined) {
        console.log("entró")
        avanceBtn.disabled = true;
    }
    aguaConsumo = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Cuánta agua consumes aproximadamente al día en tu hogar?</i>'],
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
    aguaConsumo.start();
    const renova = document.getElementById("tipoRenovables").style.display = "none";
    const hogar = document.getElementById("divHogar").style.display = "none";
    const vida = document.getElementById("divVida").style.display = "flex";
    const agua = document.getElementById("aguaConsumo").style.display = "flex";
    const local = document.getElementById("locales").style.display = "none";
}

function idAgua(boton) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const agua = boton.innerHTML;
    usuario.agua = agua;
    console.log(usuario);
}

function mostrarLocales() {
    aguaConsumo.destroy();
    if (felicidades != null) {
        felicidades.destroy();
    }

    const preguntas = document.getElementById("preguntas").style.color = "#f4dfb9";
    const p = document.getElementById("preguntas").innerHTML = contadorPreguntas + " / 19";
    const flechaAvance = document.getElementById("imgAvance").style.opacity = 100;
    if (usuario.locales == undefined) {
        console.log("entró")
        avanceBtn.disabled = true;
    }
    product = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Compras productos locales o importados?</i>^2000',
            '<i class="fs-4">¿Productos de temporada o fuera de temporada?</i>'],
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
    product.start();
    const vida = document.getElementById("divVida").style.display = "flex";
    const agua = document.getElementById("aguaConsumo").style.display = "none";
    const local = document.getElementById("locales").style.display = "flex";
    const final = document.getElementById("divFinal").style.display = "none";

}

function idLocales(boton) {
    console.log("aca estoy");
    avanceBtn.disabled = false;
    const local = boton.innerHTML;
    usuario.locales = local;
    console.log(usuario);
}

function mostrarFinal() {
    product.destroy();
    const p = document.getElementById("preguntas").innerHTML = "_";
    felicidades = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¡Felicidades!Completaste la info que necesito para calcular tu huella de carbono personal</i>',
            '<i class="fs-4">Me gustaría poder enviarte los resultados a tu mail.</i>',],
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
    felicidades.start();

    avanceBtn.disabled = true;
    const flechaAvance = document.getElementById("imgAvance").style.opacity = 0;
    const local = document.getElementById("locales").style.display = "none";
    const vida = document.getElementById("divVida").style.display = "none";
    const final = document.getElementById("divFinal").style.display = "flex";
    const calcular = document.getElementById("calcular").style.display = "flex";
}

function opcionMail() {
    const checkMail = document.getElementById("mail");
    if (checkMail.checked == true) {
        const btn = document.getElementById("btnCalcular").disabled = false;
        const inputMail = document.getElementById("usuarioMail").disabled = true;
    }
    else {
        const btn = document.getElementById("btnCalcular").disabled = true;
        const inputMail = document.getElementById("usuarioMail").disabled = false;
    }
}

//VERIFICA SI ESCRIBIERON CORRECTAMENTE EL FORMATO DE UNA DIRECCION MAIL Y ACTIVA EL BOTON CALCULAR
const inputElement = document.getElementById('usuarioMail');

inputElement.addEventListener('input', function (event) {
    const inputValue = event.target.value;
    if (inputValue.includes('@')) {
        const btn = document.getElementById("btnCalcular").disabled = false;
    }
});





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
            contadorPreguntas = 0;
            comenzar();
            break;
        case 1:
            contadorPreguntas = 1;
            mostrarPreguntas();
            break;
        case 2:
            contadorPreguntas = 2;
            var audio = document.getElementById('saludo');
            audio.pause();
            audio.currentTime = 0; // Opcional: Reinicia el audio al principio
            //GUARDO EL NOMBRE INGRESADO AL TOCAR AVANZAR
            const idname = document.getElementById("usuarioNombre").value;
            usuario.nombre = idname;
            console.log(usuario);
            mostrarEdad();
            break;
        case 3:
            contadorPreguntas = 3;
            //GUARDO LA EDAD AL TOCAR AVANZAR
            const idEdad = document.getElementById("usuarioEdad").value;
            usuario.edad = idEdad;
            console.log(usuario);
            mostrarZona();
            break;
        case 4:
            contadorPreguntas = 4;
            mostrarVehiculo();
            break;
        case 5:
            if (usuario.tipoVehiculo == "No uso vehículo") {
                contadorPreguntas = 6;
                mostrarTransporte();
                break;
            }
            else {
                contadorPreguntas = 5;
                mostrarKilometros();
                break;
            }

        case 6:
            contadorPreguntas = 6;
            mostrarTransporte();
            break;
        case 7:
            contadorPreguntas = 7;
            mostrarVuelos();
            break;
        case 8:
            contadorPreguntas = 8;
            mostrarBiciCamina();
            break;
        case 9:
            contadorPreguntas = 9;
            mostrarCarpooling();
            break;
        case 10:
            if (usuario.tipoVehiculo == "No uso vehículo") {
                contadorPreguntas = 11;
                mostrarEnergia();
                break;
            }
            else {
                contadorPreguntas = 10;
                mostrarEficiencia();
                break;
            }
        case 11:
            contadorPreguntas = 11;
            mostrarEnergia();
            break;
        case 12:
            contadorPreguntas = 12;
            mostrarVivienda();
            break;
        case 13:
            contadorPreguntas = 13;
            mostrarPersonas();
            break;
        case 14:
            contadorPreguntas = 14;
            mostrarElectros();
            break;
        case 15:
            contadorPreguntas = 15;
            mostrarReciclar();
            break;
        case 16:
            contadorPreguntas = 16;
            mostrarDispositivos();
            break;
        case 17:
            contadorPreguntas = 17;
            mostrarRenovable();
            break;
        case 18:
            contadorPreguntas = 18;
            mostrarAgua();
            break;
        case 19:
            contadorPreguntas = 19;
            mostrarLocales();
            break;
        case 20:
            mostrarFinal();
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
            contadorPreguntas = 0;
            break;
        case 1:
            mostrarPreguntas();
            contadorPreguntas = 1;
            break;
        case 2:
            contadorPreguntas = 2;
            mostrarEdad();
            break;
        case 3:
            contadorPreguntas = 3;
            mostrarZona();
            break;
        case 4:
            contadorPreguntas = 4;
            mostrarVehiculo();
            break;
        case 5:
            if (usuario.tipoVehiculo == "No uso vehículo") {
                contadorPreguntas = 4;
                mostrarVehiculo();
                break;
            }
            else {
                contadorPreguntas = 5;
                mostrarKilometros();
                break;
            }

        case 6:
            contadorPreguntas = 6;
            mostrarTransporte();
            break;
        case 7:
            mostrarVuelos();
            break;
        case 8:
            mostrarBiciCamina();
            break;
        case 9:
            mostrarCarpooling();
            break;
        case 10:
            if (usuario.tipoVehiculo == "No uso vehículo") {
                contadorPreguntas = 9;
                mostrarCarpooling();
                break;
            }
            else {
                contadorPreguntas = 10;
                mostrarEficiencia();
                break;
            }
        case 11:
            mostrarEnergia();
            break;
        case 12:
            contadorPreguntas = 12;
            mostrarVivienda();
            break;
        case 13:
            contadorPreguntas = 13;
            mostrarPersonas();
            break;
        case 14:
            contadorPreguntas = 14;
            mostrarElectros();
            break;
        case 15:
            contadorPreguntas = 15;
            mostrarReciclar();
            break;
        case 16:
            contadorPreguntas = 16;
            mostrarDispositivos();
            break;
        case 17:
            contadorPreguntas = 17;
            mostrarRenovable();
            break;
        case 18:
            contadorPreguntas = 18;
            mostrarAgua();
            break;
        case 19:
            contadorPreguntas = 19;
            avanceBtn.disabled = false;
            mostrarLocales();
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
    switch (pantallaActiva) {
        case 4:
            const interval = setInterval(() => {
                if (progress >= 33) {// Porcentaje de llenado
                    clearInterval(interval);
                } else {
                    progress++;
                    updateProgressBar(progress);
                }
            }, 20);// Cambia este valor para ajustar la velocidad de llenado
            break;
        case 11:
            const interval2 = setInterval(() => {
                if (progress >= 66) {// Porcentaje de llenado
                    clearInterval(interval);
                } else {
                    progress++;
                    updateProgressBar(progress);
                }
            }, 20);// Cambia este valor para ajustar la velocidad de llenado
            break;

        default:
            break;
    }


}

// Llama a la función para simular el progreso
simulateProgress();