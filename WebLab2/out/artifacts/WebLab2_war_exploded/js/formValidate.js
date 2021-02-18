let form = document.querySelector('.formWithValidation')
let textInput = form.querySelector('.textInput')
let radioInput = form.querySelector('.radioInput')
let fields = form.querySelectorAll('.field')
let radioFields= form.querySelectorAll('.radioField')
let radioInputDiv = form.querySelectorAll('.radioInputDiv');

form.addEventListener('submit', function (event) {
  let boolean = true;   let boolean1 = true;  let boolean2 = true;
    event.preventDefault();

    removeValidation()
    // boolean2 = checkAllFieldsPresence()

    boolean1 = checkInputTextValue()

    boolean = checkInputRadio()

    boolean2 = checkAllFieldsPresence()


    if (boolean &&  boolean1  && boolean2){

        $(this).unbind('submit').submit()
        
    }
})

let generateError = function (text) {
    let error = document.createElement('div')
    error.className = 'error'
    error.style.color = 'red'
    error.innerHTML = text
    return error
  }
let removeValidation = function () {
    let errors = form.querySelectorAll('.error')
    for (let i = 0; i < errors.length; i++) {
      errors[i].remove()
    }
  }
let checkAllFieldsPresence = function () {
    let b = true
    for (let i = 0; i < fields.length; i++) {
      if (!fields[i].value) {
        showMessageBox('ошибка')
        console.log('Незаполненное значение', fields[i])
        let error = generateError('Не может быть пустым!')
        fields[i].parentElement.insertBefore(error, fields[i])
        b = false
      }
    }
    return b
    
  }
let checkInputTextValue = function () {
  let bool = true
    if(isNaN(textInput.value) || textInput.value.split('.')[1].length>5){
    showMessageBox('ошибка')
    bool=false
        var errorText_1 = generateError('Введенное значение не является числом.')
    }
    else if(textInput.value.replace(",",".")>=3 || textInput.value.replace(",",".")<=-5){
      showMessageBox('ошибка')
      bool=false
        var errorText_1 = generateError('Число не попало в заданный диапозон')
    }
      try {
        textInput.parentElement.insertBefore(errorText_1, textInput)
      } catch (e)
      {
         //Uncaught TypeError: Failed to execute 'insertBefore' on 'Node': parameter 1 is not of type 'Node'
      }
      return bool
}
let checkInputRadio = function (){
    let bool123 = true
    let value = ""
  for (let i = 0; i < radioFields.length; i++) {
    if (radioFields[i].checked)
      value = radioFields[i].value   
    }
  if (value==="")
    {
      bool123=false
      console.log('Незаполненное значение', radioInputDiv)
      showMessageBox('ошибка')
        let errorRadio = generateError("Вы не выбрали значение")
      radioInput.parentElement.insertBefore(errorRadio, radioInput)
    }
    return bool123
}
