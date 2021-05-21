// Definicion de botones 
let btn = document.getElementById('boton');
let btnClose = document.getElementById('button__close');

//definicion de variables que contienen la ventada modal
let modal = document.getElementsByClassName('modal')[0]
let modalContenido = document.getElementsByClassName('modal__content')[0];


//Esta funcion abre la ventana modal
btn.onclick = function () {
    modal.style.opacity = '1';
    modal.style.visibility = 'visible'
    modalContenido.style.opacity = 1
}

btnClose.onclick = function () {
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden'
    modalContenido.style.opacity = '0'
}
window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.opacity = '0';
        modal.style.visibility = 'hidden'
        modalContenido.style.opacity = '0'
    }
}