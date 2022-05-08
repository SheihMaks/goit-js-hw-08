import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
// const formInputRef = document.querySelector('input[name = "email"]');
// const formMessageRef = document.querySelector('textarea[name="message"]');
const FEEDBACK_FORM_STATE = 'feedback-form-state';
let formData = {};
const saveData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));

rewriteValue();

const onInputValue = ev => {
  formData[ev.target.name] = ev.target.value;
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));
};

const onSubmitForm = ev => {
  ev.preventDefault();
  ev.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE);
  console.log(saveData);
};

function rewriteValue() {
  if (saveData) {
    Object.keys(saveData).forEach(key => {
      formRef[key].value = saveData[key];
    });
    // if (saveData.email) formInputRef.value = saveData.email;
    // if (saveData.message) formMessageRef.value = saveData.message;
  }
}

formRef.addEventListener('input', throttle(onInputValue, 500));
formRef.addEventListener('submit', onSubmitForm);
