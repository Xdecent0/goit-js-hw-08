import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const formData = {};
GetData();
form.addEventListener('input', throttle(onForm, 500));
form.addEventListener('submit', onSubmit);

function onForm(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function onSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
}
function GetData() {
  if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (data.email) {
      email.value = data.email;
    }
    if (data.message) {
      message.value = data.message;
    }
  }
}
