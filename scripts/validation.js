/*const showInputError = (input, formEl, { errorClass }) => {
  const errorSpan = formEl.querySelector("#" + input.id + "-error");
  errorSpan.textContent = input.validationMessage;
  input.classList.add(errorClass);
};

const hideInputError = (input, formEl, { errorClass }) => {
  const errorSpan = formEl.querySelector("#" + input.id + "-error");
  errorSpan.textContent = "";
  input.classList.remove(errorClass);
};

const checkInputValidity = (formEl, input, settings) => {
  if (input.validity.valid) {
    hideInputError(input, formEl, settings);
  } else {
    showInputError(input, formEl, settings);
  }
};

const setEventListeners = (formEl, settings) => {
  const inputs = [...formEl.querySelectorAll(settings.inputSelector)];
  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      checkInputValidity(formEl, input, settings);
    });
  });
};

const enableValidation = (settings) => {
  const formElements = [...document.querySelectorAll(settings.formSelector)];
  formElements.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => e.preventDefault());
    setEventListeners(formEl, settings);
  });
};

// enabling validation by calling enableValidation()
// pass all the settings on call

enableValidation({
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input_error",
});

export { enableValidation };
*/
// Function to show input error and set error message
const showInputError = (input, formEl, { errorClass }) => {
  const errorSpan = formEl.querySelector("#" + input.id + "-error");
  errorSpan.textContent = input.validationMessage;
  input.classList.add(errorClass);
};

// Function to hide input error and clear error message
const hideInputError = (input, formEl, { errorClass }) => {
  const errorSpan = formEl.querySelector("#" + input.id + "-error");
  errorSpan.textContent = "";
  input.classList.remove(errorClass);
};

// Function to check input validity and show/hide error messages
const checkInputValidity = (formEl, input, settings) => {
  if (input.validity.valid) {
    hideInputError(input, formEl, settings);
  } else {
    showInputError(input, formEl, settings);
  }
};

// Function to set event listeners for input fields
const setEventListeners = (formEl, settings) => {
  const inputs = [...formEl.querySelectorAll(settings.inputSelector)];
  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      checkInputValidity(formEl, input, settings);
    });
  });
};

// Main function to enable validation for forms
const enableValidation = (settings) => {
  const formElements = [...document.querySelectorAll(settings.formSelector)];
  formElements.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => e.preventDefault());
    setEventListeners(formEl, settings);
  });
};

// Enable validation by calling enableValidation() and passing the settings
enableValidation({
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input_error",
});

export { enableValidation };
