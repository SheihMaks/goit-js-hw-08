const formRef = document.querySelector('.feedback-form');
const formInputRef = document.querySelector('input[name = "email"]');
const formMessageRef = document.querySelector('textarea[name="message"]');

rewriteValue();

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

function rewriteValue() {
  const saveData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (saveData) {
    Object.keys(saveData).forEach(el => (formData[el].value = saveData[el]));
  }
  return;
}
