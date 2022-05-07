const formRef = document.querySelector('.feedback-form');
const formInputRef = document.querySelector('input[name = "email"]');
const formMessageRef = document.querySelector('textarea[name="message"]');
console.log(formInputRef);
console.log(formMessageRef);
onPaste();

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

function onPaste() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  if (savedMessage) {
    const obj = JSON.parse(savedMessage);
    console.log(obj.email);
    obj.email = '' ? (formInputRef.value = 'null') : (formInputRef.value = obj.email);
    obj.message = '' ? (formMessageRef.value = 'null') : (formMessageRef.value = obj.message);
  }
  return;
}
