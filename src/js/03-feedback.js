import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let = FormData = localStorage.getItem(STORAGE_KEY);

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.input');
const messageEl = document.querySelector('.textarea');

getFormOutPut();

formEl.addEventListener('input', throttle(onSaveInput, 500));
formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt){
evt.preventDefault();
evt.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
localStorage = {};

console.log('SEND');
}

function onSaveInput(evt){
const email = evt.target.value;
const message = evt.target.value;
localStorage.setItem(STORAGE_KEY, message);
}

function getFormOutPut(){
const savedMessage = localStorage.getItem('feetback');

if(savedMessage){
    console.log(savedMessage);
    textarea.value = savedMessage;
}
}