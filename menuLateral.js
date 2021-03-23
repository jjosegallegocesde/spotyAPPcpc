let botonLateral=document.getElementById("menu-toggle");
botonLateral.addEventListener("click",desplegarMenu);

function desplegarMenu(){

    let contenidoMenu=document.getElementById("wrapper");
    contenidoMenu.classList.toggle("toggled");

}