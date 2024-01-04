/* 

function showInputError(
  formElement,
  inputElement,
  errorMessage,
  inputErrorClass,
  errorClass
) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
}

function hideInputError(
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(errorClass);
}

function checkInputValidity(
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      inputErrorClass,
      errorClass
    );
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
}

function setEventListeners(
  formElement,
  inputSelector,
  submitButtonSelector,
  inputErrorClass,
  errorClass,
  inactiveButtonClass
) {
  const inputElements = Array.from(formElement.querySelectorAll(inputSelector));
  const submitButton = formElement.querySelector(submitButtonSelector);

  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(
        formElement,
        inputElement,
        inputErrorClass,
        errorClass
      );
      toggleSubmitButtonState(inputElements, submitButton, inactiveButtonClass);
    });
  });
}

function toggleSubmitButtonState(
  inputElements,
  submitButton,
  inactiveButtonClass
) {
  const isFormValid = inputElements.every(
    (inputElement) => inputElement.validity.valid
  );
  submitButton.disabled = !isFormValid;
  submitButton.classList.toggle(inactiveButtonClass, !isFormValid);
}

function enableValidation(config) {
  const formElements = Array.from(
    document.querySelectorAll(config.formSelector)
  );

  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    setEventListeners(
      formElement,
      config.inputSelector,
      config.submitButtonSelector,
      config.inputErrorClass,
      config.errorClass,
      config.inactiveButtonClass
    );

    const submitButton = formElement.querySelector(config.submitButtonSelector);
    const inputElements = Array.from(
      formElement.querySelectorAll(config.inputSelector)
    );
    toggleSubmitButtonState(
      inputElements,
      submitButton,
      config.inactiveButtonClass
    );
  });
}

*/

const showInputError = (input, formEl, { errorClass }) => {
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
  inputErrorClass: "popup__input_type_error",
  errorClass: ".modal__input_error",
});

export { enableValidation };
