const refsPolicy = document.querySelectorAll('.js-policy');
const btnClose = document.querySelector('.modal__close-btn');
const refModal = document.querySelector('.backdrop');

btnClose.addEventListener('click', onClosePolicy)

for (let refPolicy of refsPolicy) {
  refPolicy.addEventListener('click', onClickPolicy);
}

function onClickPolicy(e){
  e.preventDefault()
  refModal.classList.add('is-block')
}

function onClosePolicy(e){
  e.preventDefault()
    refModal.classList.remove('is-block')
}