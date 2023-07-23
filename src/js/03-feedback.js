import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const userEmail = document.querySelector('.feedback-form input');
const userMessage = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

localStorageData();

function localStorageData() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (data) {
    userEmail.value = data.email;
    userMessage.value = data.message;
  }
}