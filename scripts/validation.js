function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.formSelector));

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setFormValidationListeners(form, config);
  });
}

function setFormValidationListeners(form, config) {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  const submitButton = form.querySelector(config.submitButtonSelector);

  inputList.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(form, input, config);
      toggleSubmitButtonState(inputList, submitButton, config);
    });

    input.addEventListener("focus", () => {
      hideInputError(form, input, config);
    });
  });

  form.addEventListener("reset", () => {
    inputList.forEach((input) => {
      hideInputError(form, input, config);
    });
    toggleSubmitButtonState(inputList, submitButton, config);
  });

  const overlay = form.querySelector(".modal__overlay");
  overlay.addEventListener("click", () => {
    closePopup(form);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePopupOnEsc(form);
    }
  });
}

function checkInputValidity(form, input, config) {
  if (input.validity.valid) {
    hideInputError(form, input, config);
  } else {
    showInputError(form, input, input.validationMessage, config);
  }
}

function showInputError(form, input, errorMessage, config) {
  const errorElement = form.querySelector(`#${input.id}-error`);

  input.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
}

function hideInputError(form, input, config) {
  const errorElement = form.querySelector(`#${input.id}-error`);

  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(config.errorClass);
}

function toggleSubmitButtonState(inputList, submitButton, config) {
  const isFormValid = inputList.every((input) => input.validity.valid);

  if (isFormValid) {
    submitButton.removeAttribute("disabled");
    submitButton.classList.remove(config.inactiveButtonClass);
  } else {
    submitButton.setAttribute("disabled", true);
    submitButton.classList.add(config.inactiveButtonClass);
  }
}

function closePopup(popup) {
  popup.classList.remove("modal_open");
  resetFormValidation(popup);
}

function closePopupOnEsc(popup) {
  if (popup.classList.contains("modal_open")) {
    closePopup(popup);
  }
}

function resetFormValidation(popup) {
  const form = popup.querySelector(".modal__form");
  form.reset();

  const submitButton = popup.querySelector(".modal__button");
  submitButton.setAttribute("disabled", true);
  submitButton.classList.add("inactive");

  const errorMessages = popup.querySelectorAll(".popup__error");
  errorMessages.forEach((errorMessage) => {
    errorMessage.textContent = "";
    errorMessage.classList.remove("popup__error_visible");
  });

  const inputFields = popup.querySelectorAll(".modal__input");
  inputFields.forEach((inputField) => {
    inputField.classList.remove("popup__input_type_error");
  });
}

// Example usage
enableValidation({
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
