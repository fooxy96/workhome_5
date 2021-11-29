'use strict'

const inputEmail = document.querySelector('input[name=email]');
const inputLabelEmail = document.querySelector('label[class=label-email]');
const inputPass = document.querySelector('input[name=password]');
const inputLabelPass = document.querySelector('label[class=label-pass]');
const inputCheckbox = document.querySelector('input[name=checkbox]');
const inputLabelCheckbox = document.querySelector('label[class=form__checkbox]');
const inputAfterCheckbox = document.querySelector('label[class=form__checkbox]');
const inputEmailNotice = document.querySelector('span[class=inputEmailNotice]');
const inputPassNotice = document.querySelector('span[class=inputPassNotice]');
const inputCheckboxNotice = document.querySelector('span[class=inputCheckboxNotice]');
const button = document.querySelector('.button');

const inputEmailAfter = document.querySelector('div[class=form__email]');
inputEmailAfter.classList.add('bar');
const inputPassAfter = document.querySelector('div[class=form__pass]');
inputPassAfter.classList.add('bar');

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

button.addEventListener('click', (event) => {
    if (inputEmail.value !== inputEmail.value.replace(re)){
        inputEmail.style.border = '2px solid #787878'
        inputLabelEmail.style.color = '#787878'
        inputEmailAfter.style.color = '#787878'
        inputEmailNotice.style.display = 'none'
    }
    else if (inputEmail.value === ''){
        console.log('Поле обязательно для заполнения');
        inputEmail.style.border = '2px solid orange'
        inputLabelEmail.style.color = 'orange'
        inputEmailNotice.style.color = 'orange'
        inputEmailAfter.style.color = 'orange'
        inputEmailNotice.style.display = 'block'
        inputEmailNotice.textContent = 'Поле обязательно для заполнения'
    }
    else if (inputEmail.value === inputEmail.value.replace(re)){
        console.log('Email невалидный');
        inputEmail.style.border = '2px solid red'
        inputLabelEmail.style.color = 'red'
        inputEmailNotice.style.color = 'red'
        inputEmailAfter.style.color = 'red'
        inputEmailNotice.style.display = 'block'
        inputEmailNotice.textContent = 'Email невалидный'
    }
    if (inputPass.value.length >= 8){
        inputPass.style.border = '2px solid #787878'
        inputLabelPass.style.color = '#787878'
        inputPassAfter.style.color = '#787878'
        inputPassNotice.style.display = 'none'
    }
    else if (inputPass.value.length === 0){
        console.log('Поле обязательно для заполнения');
        inputPass.style.border = '2px solid orange'
        inputLabelPass.style.color = 'orange'
        inputPassNotice.style.color = 'orange'
        inputPassAfter.style.color = 'orange'
        inputPassNotice.style.display = 'block'
        inputPassNotice.textContent = 'Поле обязательно для заполнения'
    }
    else if (inputPass.value.length <= 8){
        console.log('Пароль должен содержать как минимум 8 символов');
        inputPass.style.border = '2px solid red'
        inputLabelPass.style.color = 'red'
        inputPassNotice.style.color = 'red'
        inputPassAfter.style.color = 'red'
        inputPassNotice.style.display = 'block'
        inputPassNotice.textContent = 'Пароль должен содержать как минимум 8 символов'
    }
    if (inputCheckbox.checked === false){
        console.log('Поле обязательно для заполнения');
        inputLabelCheckbox.style.border = '2px solid red'
        inputAfterCheckbox.style.color = 'red'
        inputCheckboxNotice.style.display = 'block'
        inputCheckboxNotice.style.color = 'red'
        inputCheckboxNotice.textContent = 'Поле обязательно для заполнения'
    }
    else if (inputCheckbox.checked === true){
        inputLabelCheckbox.style.border = '2px solid #787878'
        inputAfterCheckbox.style.color = '#787878'
        inputCheckboxNotice.style.display = 'none'
    }
    if (inputEmail.value !== inputEmail.value.replace(re) && inputPass.value.length >= 8 && inputCheckbox.checked === true){

        const Email = inputEmail.value;
        const Password = inputPass.value;
        const objextAll = [{Email}, {Password}];

        console.log(objextAll);
    }

    event.preventDefault();
});