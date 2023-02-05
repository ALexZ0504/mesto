const formElement = document.querySelector('.popup__container');
const formInput = formElement.querySelector('.popup__input');

const showInputError = (formElement, formInput, errorMessage) => {
  const error = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.add('popup__input_error');
  error.classList.add('popup__error_visible');
  error.textContent = errorMessage;
};

const hideInputError = (formElement, formInput) => {
  const error = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove('popup__input_error');
  error.classList.remove('popup__error_visible');
  error.textContent = '';
};

const isValid = (formElement, formInput) => {
  if (!formInput.validity.valid) {
    showInputError(formElement, formInput, formInput.validationMessage);
  } else {
    hideInputError(formElement, formInput);
  }
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save-button_block');
  } else {
    buttonElement.classList.remove('popup__save-button_block');
  }
};


const hasInvalidInput = (inputList) => {
  return inputList.some((formInput) => {
    return !formInput.validity.valid;
  });
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__save-button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      isValid(formElement, formInput);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__container'));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

enableValidation();