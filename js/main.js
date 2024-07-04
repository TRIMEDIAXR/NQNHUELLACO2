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

class Usuario {
    constructor(nombre, apellido, edad, telefono, mail, region, consumoTotal, categoria, fecha, primerTiempo, segundoTiempo, cantPersonas, tipoElectrico, cantConsumoElectrico, tipoGas, cantConsumoGas, cantResiduos, colectivo, moto, auto, bici, tren, caminar, monopatin, frecuenciaAuto, frecuenciaAvion, frecuenciaColectivo, dieta, consumoCarne, recicla, compost, plantas, dispositivos, salidas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
        this.mail = mail;
        this.region = region;
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

let factoresEmisionCO2 = { auto: "skk", colectivo: "" };
let frasesBienvenida = [];
let pantallaActiva = 0;

//SE EJECUTA AL CARGA LA PAGINA
comenzar();

//COMIENZA LA APLICACION
function comenzar() {
    const login = document.getElementById("btnlogin").style.display = "flex";
    const qa = document.getElementById("qa").style.display = "none";
    const auspiciantes = document.getElementById("provincia").style.display = "flex";
    const botonesNav = document.getElementById("botonesNav").style.display = "none";
    const fondo = document.getElementById("fondo").style.backgroundImage = "url(../images/fondo.jpeg)";
    const main = document.getElementById("main").style.display = "block";
    pantallaActiva = 0;
    bienvenida.reset();
    bienvenida.start();
    bienvenida.stop();
    console.log(pantallaActiva);
}

////////////////////////COMIENZA LA CAPTURA DE DATOS PERSONALES///////////////////

function mostrarQA() {
    const main = document.getElementById("main").style.display = "none";
    const qa = document.getElementById("qa").style.display = "flex";
    const auspiciantes = document.getElementById("provincia").style.display = "none";
    const botonesNav = document.getElementById("botonesNav").style.display = "flex";
    const fondo = document.getElementById("fondo").style.backgroundImage = "url(../images/perfil.jpg)";
    const login = document.getElementById("btnlogin").style.display = "none";
    pantallaActiva = 1;
    bienvenida.start();
    bienvenida.reset();
    console.log(pantallaActiva);
    const nombre = document.getElementById("inputNombre").style.display = "flex";
    const edad = document.getElementById("inputEdad").style.display = "none";
    const zona = document.getElementById("inputZona").style.display = "none";
}


function mostrarEdad() {
    bienvenida.destroy();
    edad = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿Qué edad tenes?</i>'],

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
}

function mostrarZona() {
    edad.destroy();
    zona = new Typed('#txtAnimado', {
        strings: [
            '<i class="fs-4">¿En qué región de la provincia de Neuquén vivís?</i>'],

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
}

function compartirResultado() {

}


//TECLAS DE CONTROL

function avanzar() {
    //AUMENTA LA POSICION DE PANTALLAS
    pantallaActiva += 1;
    console.log(pantallaActiva);
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

        default:
            comenzar();
            break;
    }
}

function retroceder() {
    //REDUCE LA POSICION DE PANTALLAS
    pantallaActiva -= 1;
    console.log(pantallaActiva);
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


        default:
            comenzar();
            break;
    }
}