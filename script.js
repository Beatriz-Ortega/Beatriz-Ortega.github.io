//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");
var logo = document.getElementById("menu-logo")

//Evento para mostrar y ocultar menú
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");        
    }

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 800){

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 800){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});

//Marcador de menú//

function mark(n){
    for(let i=1; i<6; i++){
        document.getElementById("op"+i).classList.remove("selected");
    }
    document.getElementById("op"+n).classList.toggle("selected");
}



//funcion check on hoover para proyectos//

document.querySelector(".box1").addEventListener("click", box_selected1);
document.querySelector(".box2").addEventListener("click", box_selected2);
document.querySelector(".box3").addEventListener("click", box_selected3);
document.querySelector(".box4").addEventListener("click", box_selected4);

4
//declarando variables

//box1

box1 = document.querySelector(".box1");
check_bg1 = document.querySelector(".box1 .check");
icon_check1 = document.querySelector(".box1 .fa-check");

//box2

box2 = document.querySelector(".box2");
check_bg2 = document.querySelector(".box2 .check");
icon_check2 = document.querySelector(".box2 .fa-check");

//box3

box3 = document.querySelector(".box3");
check_bg3 = document.querySelector(".box3 .check");
icon_check3 = document.querySelector(".box3 .fa-check");

//box4

box4 = document.querySelector(".box4");
check_bg4 = document.querySelector(".box4 .check");
icon_check4 = document.querySelector(".box4 .fa-check");

function box_selected1 () {  
    window.open('https://github.com/Beatriz-Ortega/Calculadora', '_blank');
    box1.classList.toggle('box-selected');
    check_bg1.classList.toggle('check-selected');
    icon_check1.classList.toggle('icon-check');
}

function box_selected2 () {
    window.open('https://github.com/Beatriz-Ortega/Api-Fetch', '_blank');
    box2.classList.toggle('box-selected');
    check_bg2.classList.toggle('check-selected');
    icon_check2.classList.toggle('icon-check');
}

function box_selected3 () {
    window.open('https://github.com/Beatriz-Ortega/carrito-de-compra', '_blank');
    box3.classList.toggle('box-selected');
    check_bg3.classList.toggle('check-selected');
    icon_check3.classList.toggle('icon-check');
}

function box_selected4 () {
    window.open('https://github.com/Beatriz-Ortega/Api-Fetch', '_blank');
    box4.classList.toggle('box-selected');
    check_bg4.classList.toggle('check-selected');
    icon_check4.classList.toggle('icon-check');
}
