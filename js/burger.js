const btnOpen = document.querySelector('.burger__btn-open')
const btnClose = document.querySelector('.burger__btn-close')
const burgerMenu = document.querySelector('.burger__menu')

btnOpen.addEventListener('click', onClickOpen)
btnClose.addEventListener('click', onClickClose)

function onClickOpen(){
    burgerMenu.classList.add('is-hiden')
}

function onClickClose(){
    burgerMenu.classList.remove('is-hiden')
}