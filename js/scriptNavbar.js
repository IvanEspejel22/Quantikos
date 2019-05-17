function mostrarMenu(evt){
    evt.preventDefault();
    var enlace = document.getElementsByName("nav-enlaces");
    enlace[0].classList.toggle("desaparece");
}
function mostrarSub(evt,id){
    evt.preventDefault();
    var enlace = document.getElementById("sm"+id);
    if(enlace.style.display == "flex")
        enlace.style.display="none";
    else enlace.style.display="flex";
}