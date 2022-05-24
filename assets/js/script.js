var clic = 1;

function divLogin() {

    if (clic == 1) {


        document.getElementById("tabCol").style.height = "100vh";
        document.getElementById("defaultCanvas0").style.display = "none";
        $("#tabCol").show("slow");

        clic = clic + 1;


    } else {

        document.getElementById("tabCol").style.height = "0px";
        document.getElementById("tabCol").style.display = "none";


        clic = 1;

    }

}

// Funciones para generar un color aleatorio

function aleatorio(inferior, superior) {
    numPosibilidades = superior - inferior;
    aleat = Math.random() * numPosibilidades;
    aleat = Math.floor(aleat);
    return parseInt(inferior) + aleat;
}

function colorR() {
    hexadecimal = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
    color_aleatorio = "#";
    for (i = 0; i < 6; i++) {
        posarray = aleatorio(0, hexadecimal.length);
        color_aleatorio += hexadecimal[posarray];
    }
}

/*  --Función para asignar id por medio de una función de JS
function ids(value) {
    idnum = "col";

    console.log(idnum);
    document.getElementsByClassName("campo")[0].setAttribute("id", (idnum + 1));
    document.getElementsByClassName("campo")[1].setAttribute("id", (idnum + 2));
    document.getElementsByClassName("campo")[2].setAttribute("id", (idnum + 3));
    document.getElementsByClassName("campo")[3].setAttribute("id", (idnum + 4));
    document.getElementsByClassName("campo")[4].setAttribute("id", (idnum + 5));
    document.getElementsByClassName("campo")[5].setAttribute("id", (idnum + 6));
    document.getElementsByClassName("campo")[6].setAttribute("id", (idnum + 7));
    document.getElementsByClassName("campo")[7].setAttribute("id", (idnum + 8));
    document.getElementsByClassName("campo")[8].setAttribute("id", (idnum + 9));

} */

// Funciones para cambiar el color de fondo de cada campo de la tabla

function pintar1() {
    colorR();

    document.getElementById("col1").style.backgroundColor = color_aleatorio;
    document.getElementById("col1").style.backgroundImage = 'none';
    document.getElementById("col1").innerHTML = color_aleatorio;

}

function pintar2() {
    colorR();

    document.getElementById("col2").style.backgroundColor = color_aleatorio;
    document.getElementById("col2").style.backgroundImage = 'none';
    document.getElementById("col2").innerHTML = color_aleatorio;
}

function pintar3() {
    colorR();

    document.getElementById("col3").style.backgroundColor = color_aleatorio;
    document.getElementById("col3").style.backgroundImage = 'none';
    document.getElementById("col3").innerHTML = color_aleatorio;
}

function pintar4() {
    colorR();

    document.getElementById("col4").style.backgroundColor = color_aleatorio;
    document.getElementById("col4").style.backgroundImage = 'none';
    document.getElementById("col4").innerHTML = color_aleatorio;

}

function pintar5() {
    colorR();

    document.getElementById("col5").style.backgroundColor = color_aleatorio;
    document.getElementById("col5").style.backgroundImage = 'none';
    document.getElementById("col5").innerHTML = color_aleatorio;
}

function pintar6() {
    colorR();

    document.getElementById("col6").style.backgroundColor = color_aleatorio;
    document.getElementById("col6").style.backgroundImage = 'none';
    document.getElementById("col6").innerHTML = color_aleatorio;
}

function pintar7() {
    colorR();

    document.getElementById("col7").style.backgroundColor = color_aleatorio;
    document.getElementById("col7").style.backgroundImage = 'none';
    document.getElementById("col7").innerHTML = color_aleatorio;

}

function pintar8() {
    colorR();

    document.getElementById("col8").style.backgroundColor = color_aleatorio;
    document.getElementById("col8").style.backgroundImage = 'none';
    document.getElementById("col8").innerHTML = color_aleatorio;
}

function pintar9() {
    colorR();

    document.getElementById("col9").style.backgroundColor = color_aleatorio;
    document.getElementById("col9").style.backgroundImage = 'none';
    document.getElementById("col9").innerHTML = color_aleatorio;
}


var clic2 = 1;

function divLogin2() {

    if (clic2 == 1) {


        document.getElementById("tabCol").style.display = "none";
        $("#defaultCanvas0").show("slow");

        clic2 = clic2 + 1;


    } else {

        document.getElementById("defaultCanvas0").style.display = "none";


        clic2 = 1;

    }

}

// Imagen en movimiento

let x;
let y;

let xspeed;
let yspeed;

let dvd;

let r, g, b;

function preload() {
    dvd = loadImage(`movimiento.png`);
}

function setup() {
    createCanvas(1500, 465);
    x = random(width);
    y = random(height);
    xspeed = 4;
    yspeed = 4;
    pickColor();
}

function pickColor() {
    r = random(100, 256);
    g = random(100, 256);
    b = random(100, 256);
}

function draw() {
    background(0);
    // rect(x, y, 80, 60);
    // Draw the DVD logo
    tint(r, g, b);
    image(dvd, x, y);

    x = x + xspeed;
    y = y + yspeed;

    if (x + dvd.width >= width) {
        xspeed = -xspeed;
        x = width - dvd.width;
        pickColor();
    } else if (x <= 0) {
        xspeed = -xspeed;
        x = 0;
        pickColor();
    }

    if (y + dvd.height >= height) {
        yspeed = -yspeed;
        y = height - dvd.height;
        pickColor();
    } else if (y <= 0) {
        yspeed = -yspeed;
        y = 0;
        pickColor();
    }
}