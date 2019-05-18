function mostrarMenu(evt){
    evt.preventDefault();
    var enlace = document.getElementsByName("nav-enlaces");
    enlace[0].classList.toggle("desaparece");
    for(var index = 1, enlace2; index < 3; index++){
        enlace2 = document.getElementById("sm"+index);
        enlace2.style = null;
    }
}
function mostrarSub(evt,id){ 
    if(screen.width<=670){
        evt.preventDefault();
        var enlace = document.getElementById("sm"+id);
        if(enlace.style.display == "flex")
            enlace.style.display="none";
        else enlace.style.display="flex";
    }
}
function ajuste(){
    if(screen.width>670){
        for(var index = 1, enlace; index < 3; index++){
            enlace = document.getElementById("sm"+index);
            enlace.style = null;
        }
        var enlace2 = document.getElementsByName("nav-enlaces");
        enlace2[0].classList.remove("desaparece");
    }
    else{
        var enlace = document.getElementsByName("nav-enlaces");
        enlace[0].classList.add("desaparece");
    }
}