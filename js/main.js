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
let frasesBienvenida = ["", "", ""];


comenzar();


function compartirResultado() {
}

function comenzar() {
const main=document.getElementById("main").style.display = "col-4";
const qa=document.getElementById("qa").style.display = "none";
}