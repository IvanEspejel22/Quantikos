function muestra(evt,elemento){
    evt.preventDefault();
    var enlace = document.getElementsByClassName("listado");
    var reset = document.getElementsByClassName("actual");
    reset[0].classList.toggle("actual");
    evt.srcElement.classList.toggle("actual");
    for(var index = 0; index < enlace.length; index++){
        if(index+1 == elemento)
            enlace[index].classList.add("lista-Act");
        else enlace[index].classList.remove("lista-Act");
    }
}