
import { closeOnEsc } from '../pages/index.js';
import { hideInputError, resetButtonState } from './validate.js';

const resetFormInput = (formElement, settings) => {
  if (formElement) {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);

    inputList.forEach((inputElement) => {
      hideInputError(formElement, inputElement, settings);
      formElement.reset();
    });

    resetButtonState(buttonElement, settings);
  }
}

const openPopup = (modalWindow) => {
  const popupElement = modalWindow.classList;
  popupElement.add('popup_opened');

  document.addEventListener('keydown', closeOnEsc);
}

const closePopup = (modalWindow, settings) => {
  const popupElement = modalWindow.closest('.popup');
  const formElement = popupElement.querySelector(settings.formSelector);

  popupElement.classList.remove('popup_opened');

  resetFormInput(formElement, settings);

  document.removeEventListener('keydown', closeOnEsc);
}

const getDefValueInp = (classText, classInput) => {
  classInput.value = classText.textContent;
}

export { openPopup, closePopup, getDefValueInp };
