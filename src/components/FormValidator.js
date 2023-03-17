export default class FormValidator {
  constructor(formElements, form) {
    this._formSelector = form;
    this._inputSelector = formElements.inputSelector;
    this._submitButtonSelector = formElements.submitButtonSelector;
    this._inactiveButtonClass = formElements.inactiveButtonClass;
    this._inputErrorClass = formElements.inputErrorClass;
    this._errorClass = formElements.errorClass;
  }

  _showInputError(form, formInput, errorMessage) {
    const error = form.querySelector(`.${formInput.id}-error`);
    formInput.classList.add(this._inputErrorClass);
    error.classList.add(this._errorClass);
    error.textContent = errorMessage;
  }

  _hideInputError(form, formInput) {
    const error = form.querySelector(`.${formInput.id}-error`);
    formInput.classList.remove(this._inputErrorClass);
    error.classList.remove(this._errorClass);
    error.textContent = '';
  }

  _isValid = (form, formInput) => {
    if (!formInput.validity.valid) {
      this._showInputError(form, formInput, formInput.validationMessage);
    } else {
      this._hideInputError(form, formInput);
    }
  }

  _hasInvalidInput = (inputList) => {
    return inputList.some((formInput) => {
      return !formInput.validity.valid;
    });
  }

  _setEventListeners(form) {
    const inputList = Array.from(form.querySelectorAll(this._inputSelector));
    const buttonElement = form.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((formInput) => {
      formInput.addEventListener('input', () => {
        this._isValid(form, formInput);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }

  enableValidation() {
    this._setEventListeners(this._formSelector);
  }
}