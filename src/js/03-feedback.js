const formRef = document.querySelector('.feedback-form');
const formInput = document.querySelector('input');

console.log(formInput);

const formData = {};

const onInputValue = ev => {
  formData[ev.target.name] = ev.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onSubmitForm = ev => {
  ev.preventDefault();
  ev.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
};

formRef.addEventListener('submit', onSubmitForm);
formRef.addEventListener('input', onInputValue);
// localStorage.clear();
// console.log()
// function onPaste() {
//   const savedMessage = localStorage.getItem('feedback-form-state');
//   if (savedMessage) {
//     const obj = JSON.parse('feedback-form-state');
//        = obj[email]

//     JSON.parse('feedback-form-state');
//   }
//   return;
// }
