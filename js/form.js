const refForm = document.querySelector('.js-form')
const formInputs = document.querySelectorAll('.js-input')
const inputTell = document.querySelector('.js-input-tell')
const inputEmail = document.querySelector('.js-input-email')

refForm.onSubmit = function(){
    let emailVal = inputEmail.value
    let tellVal = inputTell.value

    for (let formInput of formInputs) {
        if(formInput.value === ''){
           console.log("error")
        } else {
            alert("All GOOD")
        }
      }
}
