export default class FormValidator {
  constructor(settings, elementWithFormInside) {
    this._settings = settings;
    this._element = document.querySelector(elementWithFormInside)
    this._form = this._element.querySelector(this._settings.formSelector);
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._btnSubmit = this._form.querySelector(this._settings.submitButtonSelector)
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._btnSubmit.disabled = true;
      this._btnSubmit.classList.add(this._settings.inactiveButtonClass);
    } else {
      this._btnSubmit.disabled = false;
      this._btnSubmit.classList.remove(this._settings.inactiveButtonClass);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.classList.add(this._settings.errorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.classList.remove(this._settings.errorClass);
    errorElement.textContent = '';
  }

  resetButtonState() {
    this._btnSubmit.disabled = true;
    this._btnSubmit.classList.add(this._settings.inactiveButtonClass);
  }

  resetFormInput() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._form.reset();
    this.resetButtonState();
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity('');
    }
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

}
